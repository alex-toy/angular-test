import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() message? : string;
  @Output() tick : EventEmitter<string> = new EventEmitter<string>();

  @Output() messageEvent : EventEmitter<string> = new EventEmitter<string>();
  messageInput : string = "";
  order : string = "";

  private sub = new Subscription();
  @Input() events = new Observable<string>();
 
  constructor() { }

  ngOnInit(): void {
    this.sub = this.events.subscribe(msg => this.order = msg)
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  onClick(msg : string){
    let interval : number = +msg * 1000;
    console.log(interval)
    setInterval(() => 
      this.messageEvent.emit(msg), 
      interval
    )
  }
}
