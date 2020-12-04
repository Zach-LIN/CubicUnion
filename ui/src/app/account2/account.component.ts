import { Component, Input, OnInit } from '@angular/core';
import { AccountService2 } from '../services2/account.service';

@Component({
  selector: 'app-account2',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class Account2Component implements OnInit {
  @Input() accNum: string;
	account;

constructor(private accountService2: AccountService2) { }

  ngOnInit() {
	  this.account = this.accountService2.getAccount(this.accNum)
	  .subscribe((data)=>{
      console.log(data);
      this.account = data;
    });
  }


}
