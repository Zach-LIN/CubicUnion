import { Component, Input, OnInit } from '@angular/core';
import { AccountService2 } from '../services2/account.service';

@Component({
  selector: 'app-transactions2',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})



export class Transactions2Component implements OnInit {

constructor(private accountService2: AccountService2) { }
  @Input() accNum: string;
	transactions: any[];
	
  ngOnInit() {
        return this.accountService2.getTransactions(this.accNum)
        .subscribe((data)=>{
          console.log(Array.isArray(data));
          
          var res = [];
          for (var x in data){
            data[x].Value = JSON.parse(data[x].Value);
            data[x].Timestamp = new Date(data[x].Timestamp*1000);
             res.push(data[x])
             console.log(data[x])
          }

          this.transactions = res.reverse();       
    });
  }

}