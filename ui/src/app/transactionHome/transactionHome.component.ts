import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccountService } from '../services/account.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-transactionHome',
  templateUrl: './transactionHome.component.html',
  styleUrls: ['./transactionHome.component.css']
})
export class TransactionHomeComponent implements OnInit {

  transferVisible = false;
  bank_name = environment[10001].bank_name;
  accNum;

  constructor(public router: Router, private accountService: AccountService) { 
    this.accNum = this.router.getCurrentNavigation().extras.state.accNum;
  }

  
  submit() {
console.log(this.accNum)
this.accountService.getAccount(this.accNum)
	  .subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/home', {state: {accNum: this.accNum}});
    },
    data => {
      console.log(data)
    });
  }
  
  submit_USD() {}
  
  
  ngOnInit() {
    
  }

public showTransfer(){
  this.transferVisible = !this.transferVisible
}
}
