import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  messageInput : string = "";

  constructor(private eventService : EventService) { }

  ngOnInit(): void {
  }

  send(msg : string){
    this.eventService.emit<string>(msg)
  }
}
