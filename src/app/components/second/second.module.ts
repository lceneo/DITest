import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecondComponent} from "./second.component";
import {SecondService} from "../../services/second.service";
import {FirstService} from "../../services/first.service";



@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule
  ],
  exports: [SecondComponent],
  providers: [FirstService]
})
export class SecondModule { }
