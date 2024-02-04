import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  url = 'https://fakestoreapi.com/products';

  behaviousSubject = new BehaviorSubject([]);
  replaySubject = new ReplaySubject();
  subject = new Subject();

  constructor() {
    console.log('Injected');
  }
}
