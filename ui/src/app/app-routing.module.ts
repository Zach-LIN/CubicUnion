import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeforeLoginComponent } from './beforeLogin/beforeLogin.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home.component';
import { FaceLoginComponent } from './faceLogin/home.component';
import { TransactionHomeComponent } from './transactionHome/transactionHome.component';
import { TransactionHome2Component } from './transactionHome2/transactionHome.component';
import { TransactionHome3Component } from './transactionHome3/transactionHome.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'beforeLogin'},
  { path: 'beforeLogin', component: BeforeLoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: 'home', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: 'faceLogin', component: FaceLoginComponent },
  { path: 'transactionHome', component: TransactionHomeComponent },
  { path: 'transactionHome2', component: TransactionHome2Component },
  { path: 'transactionHome3', component: TransactionHome3Component }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }