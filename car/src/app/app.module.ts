import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Carform1Component } from './carform1/carform1.component';
import { Carform2Component } from './carform2/carform2.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    Carform1Component,
    Carform2Component,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
