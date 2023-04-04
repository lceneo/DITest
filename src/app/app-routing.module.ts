import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./components/first/first.component";
import {SecondComponent} from "./components/second/second.component";
import {FirstService} from "./services/first.service";
import {MainComponent} from "./components/main/main.component";
import {SecondModule} from "./components/second/second.module";

const routes: Routes = [
  {path: "", redirectTo: "main", pathMatch: "full"},
  {path: "main", component: MainComponent},
  {path: "first", component: FirstComponent},
  {path: "second", component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
