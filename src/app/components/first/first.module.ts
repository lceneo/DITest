import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecondService} from "../../services/second.service";
import {FirstService} from "../../services/first.service";
import { SecondComponent } from '../second/second.component';
import {FirstComponent} from "./first.component";



@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FirstComponent],
  providers: [FirstService]
})
export class FirstModule { }
