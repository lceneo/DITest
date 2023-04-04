import {Component, OnInit} from '@angular/core';
import {FirstService} from "../../services/first.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit{
  constructor(private firstService: FirstService) {}

  ngOnInit(): void {
    console.log("FirstService in SecondComponent", this.firstService.randomNumberAsStr);
  }
}
