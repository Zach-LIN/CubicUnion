import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccountService2 } from '../services2/account.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-transactionHome3',
  templateUrl: './transactionHome.component.html',
  styleUrls: ['./transactionHome.component.css']
})
export class TransactionHome3Component implements OnInit {

  transferVisible = false;
  bank_name = environment[10002].bank_name;
  accNum;

  constructor(public router: Router, private accountService2: AccountService2) { 
    this.accNum = this.router.getCurrentNavigation().extras.state.accNum;
  }

  
  submit() {
if(this.accNum=='zachlinhkd'){
console.log('zachlin')
this.accountService2.getAccount('zachlin')
	  .subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/home2', {state: {accNum: 'zachlin'}});
    },
    data => {
      console.log(data)
    });
  
    
  }
else{console.log(this.accNum)
this.accountService2.getAccount(this.accNum)
	  .subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/home2', {state: {accNum: this.accNum}});
    },
    data => {
      console.log(data)
    });
  
    
  }}
  
  submit_USD() {
    if(this.accNum=='zachlinhkd'){
    console.log('zachlin')
this.accountService2.getAccount('zachlin')
	  .subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/transactionHome2', {state: {accNum: 'zachlin'}});
    },
    data => {
      console.log(data)
    });
      
    }}
  
  submit_HKD() {}
  
  ngOnInit() {
    
  }

public showTransfer(){
  this.transferVisible = !this.transferVisible
}
}
