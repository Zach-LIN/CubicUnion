import { environment } from 'src/environments/environment';
import { AccountService } from '../services/account.service';
import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transferVisible = false;
  bank_name = environment[10001].bank_name;
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
  
  constructor(public router: Router, private accountService: AccountService) { 
    this.accNum = this.router.getCurrentNavigation().extras.state.accNum;
  }

  
  submit() {
console.log(this.accNum)
this.accountService.getAccount(this.accNum)
	  .subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/transactionHome', {state: {accNum: this.accNum}});
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
    this.accountService.postTransfer(this.fromAccNum, this.toBankID, this.toAccNum_, this.amount).subscribe(res => { 
      console.log(res);		
      this.message='Transfer Complete'
      this.show=false
      this.status='ok'

    },
    err => {
      console.log(err);
      this.message='Unable to make tranfer. Check the API configuraiton and ensure the tranfer details are correct.'
      this.show=false
      this.status='error'

    }
   );
  }

  


}
