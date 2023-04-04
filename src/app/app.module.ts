import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FirstService} from "./services/first.service";
import {SecondService} from "./services/second.service";
import {FirstModule} from "./components/first/first.module";
import {SecondModule} from "./components/second/second.module";
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecondModule,
    FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
