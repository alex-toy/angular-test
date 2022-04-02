import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, Observable, Observer, of, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-obervables',
  templateUrl: './obervables.component.html',
  styleUrls: ['./obervables.component.css']
})
export class ObervablesComponent implements OnInit {

  private subs : Subscription = new Subscription();

  public test : Promise<string> = Promise.resolve('hello');
  public test1 : string = "";

  observer1 : Observer<number> = {
    next : (item : number) => console.log(item),
    complete : () => console.log("complete"),
    error : item => console.log(item)
  }

  observer2 : Observer<number> = {
    next : (item : number) => console.warn(item),
    complete : () => console.warn("complete"),
    error : item => console.warn(item)
  }

  observer3 : Observer<string> = {
    next : (item : string) => console.error(item),
    complete : () => console.warn("complete"),
    error : item => console.warn(item)
  }

  observer4 : Observer<number> = {
    next : (item : number) => console.warn(item),
    complete : () => console.warn("terminé"),
    error : item => console.warn(item)
  }

  stream : Observable<number> = new Observable<number>();

  streamOf : Observable<number> = of(1, 2, 3, 4, 5, 6);

  streamFrom : Observable<string> = from(["un", "deux", "trois", "quatre"]);
  
  constructor() { }

  async ngOnInit(): Promise<void> {
    // const subscription : Subscription = this.stream.subscribe(this.observer);
    // setTimeout(() => subscription.unsubscribe(), 8000); 


    const streamSub : Subscription = this.stream.pipe(
      map(s => s*2),
      // filter(s => s>10)
    ).subscribe(this.observer4);

    const streamOfSub : Subscription = this.streamOf.subscribe(this.observer1);
    const streamFromSub : Subscription = this.streamFrom.subscribe(this.observer3);

    this.stream = new Observable<number>( subscriber => {
      for(let i = 1 ; i < 20 ; i++) {
        setTimeout(() => subscriber.next(i), i*1000); 
      }
    })

    this.subs.add(streamSub);
    this.subs.add(streamOfSub);
    this.subs.add(streamFromSub);

    this.test1 = await this.test;

    // this.sub = this.streamOf.pipe(
    //   s => new Observable(subscriber => subscriber.next(this.observer4))
    // ).subscribe(this.observer3);
    // this.sub = this.streamFrom.subscribe(this.observer3);
  }

  start(){
    this.subs.add(interval(1000).subscribe(this.observer1));
    this.subs.add(interval(1000).subscribe(this.observer2));
  }

  stop(){
    this.subs.unsubscribe();
  }

}
