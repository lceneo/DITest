import {Component, OnInit} from '@angular/core';
import {FirstService} from "./services/first.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'providers-first';

  constructor(private firstService: FirstService) {}

  ngOnInit(): void {

    console.log("FirstService in AppComponent", this.firstService.randomNumberAsStr);
  }
}
