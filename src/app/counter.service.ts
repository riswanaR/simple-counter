import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  counter: number=0;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  getCounterValue(){
    return this.counter;
  }
}
