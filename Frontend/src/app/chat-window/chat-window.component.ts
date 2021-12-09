import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {waitForAsync} from "@angular/core/testing";
import {interval} from "rxjs";

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  message?: string;
  messages?: any;

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    setInterval(this.getMessages, 1000);
    console.log("this.ngOnInit()");
  }

  send(){
    this.httpClient.post("https://localhost:44331/ChatMessage", { "date": new Date().toISOString(),
                                                                            "text": this.message,
                                                                            "sender": "User" }).subscribe();
    console.log(this.message);
    this.message=undefined;
  }

  getMessages(){
    console.log("get.messages()");
    this.httpClient.get("https://localhost:44331/ChatMessage").subscribe(messages => this.messages = messages)
  }
}
