import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Carform1Component } from './carform1/carform1.component';
import { Carform2Component } from './carform2/carform2.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path: "", component: Carform1Component},
  {path:"part2",component: Carform2Component},
  {path:"feedback",component: FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
