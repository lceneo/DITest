import { Injectable } from '@angular/core';

@Injectable()
export class SecondService {

 public randomNumberAsStr: string;
  constructor() {
    this.randomNumberAsStr = (Math.random() * 100).toFixed();
  }

}
