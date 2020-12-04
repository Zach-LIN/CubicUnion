import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router';


@Component({
  selector: 'app-beforeLogin',
  templateUrl: './beforeLogin.component.html',
  styleUrls: ['./beforeLogin.component.css']
})
export class BeforeLoginComponent{
  constructor(private router: Router) {
  }
  submit1() {
this.router.navigateByUrl('/login');
  }
  submit2() {
this.router.navigateByUrl('/login2');
  }
}
