import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService2 {

  constructor(private httpClient: HttpClient) { }

  public getAccount(accNumber: string) {
    return this.httpClient.get(`${environment[10002].api_url}/account/${accNumber}`);
  }
  
 public getTransactions(accNumber: string) {
    return this.httpClient.get(`${environment[10002].api_url}/transactions/${accNumber}`);
  }

  public postTransfer(fromAccNumber: string, toBankID: string, toAccNumber: string, amount: string){
    console.log(fromAccNumber)
    console.log(toAccNumber)
    var transfer = {FromAccNumber: fromAccNumber, ToBankID: toBankID, ToAccNumber: toAccNumber, Amount: amount}

    console.log(transfer)
    return this.httpClient.post(`${environment[10002].api_url}/transfer`, transfer);
  }
}
