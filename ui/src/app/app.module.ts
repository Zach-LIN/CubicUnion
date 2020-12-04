import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransactionsComponent } from './transactions/transactions.component';

import { Account2Component } from './account2/account.component';
import { Transfer2Component } from './transfer2/transfer.component';
import { Transactions2Component } from './transactions2/transactions.component';

import { BeforeLoginComponent } from './beforeLogin/beforeLogin.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home.component';
import { FaceLoginComponent } from './faceLogin/home.component';
import { TransactionHomeComponent } from './transactionHome/transactionHome.component';
import { TransactionHome2Component } from './transactionHome2/transactionHome.component';
import { TransactionHome3Component } from './transactionHome3/transactionHome.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    TransferComponent,
    TransactionsComponent,
    Account2Component,
    Transfer2Component,
    Transactions2Component,
    BeforeLoginComponent,
    LoginComponent,
    Login2Component,
    HomeComponent,
    Home2Component,
    FaceLoginComponent,
    TransactionHomeComponent,
    TransactionHome2Component,
    TransactionHome3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
