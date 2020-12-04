import { environment } from 'src/environments/environment';
import { AccountService2 } from '../services2/account.service';
import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home2',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home2Component implements OnInit {

  transferVisible = false;
  bank_name = environment[10002].bank_name;
  accNum;
  
  forex;
  bank_id;
  
  toAccNum;
  toAccNum_;
  amount;
  
  
  @Input() fromAccNum: string;
  toBankID;
  message; 
  status;
  show: boolean;
  
  ngOnInit() {
  this.show = true;
    
  }
  
  constructor(public router: Router, private accountService2: AccountService2) { 
    this.accNum = this.router.getCurrentNavigation().extras.state.accNum;
  }

  
  submit() {
console.log(this.accNum)
this.accountService2.getAccount(this.accNum)
	  .subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/transactionHome2', {state: {accNum: this.accNum}});
    },
    data => {
      console.log(data)
    });
  
    
  }
  
  
  makeTransfer() {
    this.toAccNum_=this.toAccNum
    this.fromAccNum=this.accNum
    if(this.bank_id=='1') {this.toBankID='HSBC'}
    if(this.bank_id=='2') {this.toBankID='Citibank'}
    if(this.forex=='1'&& this.toAccNum=='davidchen'&&this.bank_id=='2'){this.toAccNum_='davidchenciti'}
    if(this.forex=='9'&& this.toAccNum=='davidchen'&&this.bank_id=='2'){this.toAccNum_='davidchenciti'}
    if(this.forex=='2'){this.toAccNum_=this.toAccNum+'hkd'}
    if(this.forex=='8'){this.toAccNum_=this.toAccNum+'hkd'}
    
    if(this.forex=='8'){this.fromAccNum=this.accNum+'hkd'}
    if(this.forex=='9'){this.fromAccNum=this.accNum+'hkd'}
      
    if(this.forex=='9'&& this.bank_id=='2' && this.toAccNum=='davidchen'){
      this.toAccNum='davidchenciti'
      this.fromAccNum='davidchenhkd'

    }
    if(this.forex=='1'&& this.bank_id=='2' && this.toAccNum=='zachlin'){
      this.fromAccNum='davidchen'
      this.toBankID='Citibank'
      
    }
    this.accountService2.postTransfer(this.fromAccNum, this.toBankID, this.toAccNum_, this.amount).subscribe(res => { 
      console.log(res);		
      this.message='Transfer Complete'
      this.show=false
      this.status='ok'

    },
    err => {
      console.log(err);
      this.message='Unable to make tranfer. Check the API configuraiton and ensure the tranfer details are correct.'+this.fromAccNum+this.toBankID+this.toAccNum_+this.amount
      this.show=false
      this.status='error'

    }
   );
  }

  


}
