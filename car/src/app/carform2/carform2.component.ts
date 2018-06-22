import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-carform2',
  templateUrl: './carform2.component.html',
  styleUrls: ['./carform2.component.css']
})
export class Carform2Component implements OnInit {

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
  }

  signin(form) {
    var formpart1 = this.http.getForm()
    var Features = []
    if (form.value.GPS) {
      Features.push('GPS')
    }
    if (form.value['Security Lock']) {
      Features.push('Security Lock')
    }
    if (form.value['Cargo Mat']) {
      Features.push('Cargo Mat')
    }
    form.value.Features = Features
    this.http.setForm({ ...formpart1, ...form.value })
    this.http.postService().subscribe(
      res => {
        console.log(res)
        this.router.navigateByUrl('/feedback')
      },
      err => {
        console.log(err)
      }
    )

  }

}
