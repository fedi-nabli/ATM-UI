import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepositComponent } from './deposit/deposit.component';
import { BalanceComponent } from './balance/balance.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositCoinsComponent } from './deposit-coins/deposit-coins.component';
import { DepositNotesComponent } from './deposit-notes/deposit-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    DepositComponent,
    BalanceComponent,
    WithdrawComponent,
    DepositCoinsComponent,
    DepositNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
