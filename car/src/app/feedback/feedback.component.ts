import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  discount = 0
  formData = {}
  constructor(private router: Router,private http: HttpService) { }

  ngOnInit() {
    this.formData = this.http.getForm()
    var date = new Date(this.formData['PurchaseDate']);
    console.log(date.getDate() % 2)
    this.discount = date.getDate()%2 == 0 ? 30 : 40
    console.log(this.formData)
  }

  addmore(){
     this.router.navigateByUrl('/')
  }
}
