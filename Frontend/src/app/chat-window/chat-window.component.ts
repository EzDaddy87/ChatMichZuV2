import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  message?: string;

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {

  }

  send(){
    console.log(this.message);
    this.message=undefined;
  }

}
