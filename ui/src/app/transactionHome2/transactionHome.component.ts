import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccountService2 } from '../services2/account.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-transactionHome2',
  templateUrl: './transactionHome.component.html',
  styleUrls: ['./transactionHome.component.css']
})
export class TransactionHome2Component implements OnInit {

  transferVisible = false;
  bank_name = environment[10002].bank_name;
  accNum;

  constructor(public router: Router, private accountService2: AccountService2) { 
    this.accNum = this.router.getCurrentNavigation().extras.state.accNum;
  }

  
  submit() {
console.log(this.accNum)
this.accountService2.getAccount(this.accNum)
	  .subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/home2', {state: {accNum: this.accNum}});
    },
    data => {
      console.log(data)
    });
  
    
  }
  
  submit_USD() {}
  
  submit_HKD() {
console.log(this.accNum+'hkd')
this.accountService2.getAccount(this.accNum+'hkd')
	  .subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/transactionHome3', {state: {accNum: this.accNum+'hkd'}});
    },
    data => {
      console.log(data)
    });
  
    
  }
  
  ngOnInit() {
    
  }

public showTransfer(){
  this.transferVisible = !this.transferVisible
}
}
