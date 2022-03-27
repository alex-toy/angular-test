import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  message : string = "";
  messageInput : string = "";

  orderSubject = new Subject<string>();

  displayMessage(msg : string){
    this.message = msg;
  }

  emitEventToChild(msg : string){
    this.orderSubject.next(msg);
  }

  onClick(msg : string){
    this.emitEventToChild(msg);
  }
}
