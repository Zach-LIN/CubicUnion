import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { AccountService2 } from '../services2/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login2Component {

  accNum = '';
  passWord = '';
  bank_name = environment[10002].bank_name;
  message = ''


  constructor(private router: Router, private accountService2: AccountService2) {
  }

  submit() {
console.log(this.accNum)
if(this.accNum=='davidchen'){
    this.accNum = 'davidchenciti'
}
if(this.passWord!='weareallhere'){
    this.accNum = ''
    this.passWord = ''
}

this.accountService2.getAccount(this.accNum)
	  .subscribe((data)=>{
      console.log(data)
      this.message = ''
      this.router.navigateByUrl('/home2', {state: {accNum: this.accNum}});
    },
    data => {
      console.log(data)
      this.message = "Unable to load account. Please check your Account Number or Password."
    });
  
    
  }

}


