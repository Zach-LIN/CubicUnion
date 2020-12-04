import { Component, OnInit, Input} from '@angular/core';
import { AccountService2 } from '../services2/account.service';


@Component({
  selector: 'app-transfer2',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class Transfer2Component implements OnInit {

  constructor(private accountService2: AccountService2) { }

  amount;
  toAccNum;
  toBankID;
  message; 
  status;
  @Input() fromAccNum: string;
  show: boolean;

  ngOnInit() {
    this.show = true;
  }

  submit() {
    
    this.accountService2.postTransfer(this.fromAccNum, this.toBankID, this.toAccNum, this.amount).subscribe(res => { 
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
