import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  public childTwoEventData = "";
  messageInput : string = "";

  constructor(private eventService : EventService) { }

  ngOnInit(): void {
    this.eventService.on<string>().subscribe(data => this.childTwoEventData = data);
  }
}
