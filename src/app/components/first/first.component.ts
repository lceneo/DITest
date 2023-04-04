import {Component, OnInit} from '@angular/core';
import {FirstService} from "../../services/first.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [FirstService]
})
export class FirstComponent implements OnInit{
  constructor(private firstService: FirstService) {}

  ngOnInit(): void {
    console.log("FirstService in FirstComponent", this.firstService.randomNumberAsStr);
  }
}
