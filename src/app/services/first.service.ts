import {Injectable} from '@angular/core';
import {SecondService} from "./second.service";

@Injectable()
export class FirstService {

  public randomNumberAsStr: string;
  constructor() {
    console.log("test")
    this.randomNumberAsStr = (Math.random() * 100).toFixed();
  }
}
