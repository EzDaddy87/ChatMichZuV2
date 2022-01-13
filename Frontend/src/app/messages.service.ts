import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ReplaySubject, Observable} from "rxjs";
import {switchMap, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages$!: ReplaySubject<any[]>

  constructor(private httpClient: HttpClient) {}

  private getMessages() : Observable<any[]> {
    return this.httpClient.get<Array<any>>("https://localhost:44331/ChatMessage");
  }

  public getAllMessages$(): Observable<any[]> {
    if(!this.messages$)
    {
      setInterval(()=>{
        this.getMessages().pipe(
          tap(x => this.messages$.next(x)),
          tap(console.log)
        );
        console.log("interval");
      }, 1000);

      this.messages$ = new ReplaySubject<any[]>();
      this.messages$.next([]);
    }

      return this.messages$;
  }
}
