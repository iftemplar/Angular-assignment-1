import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningComponent } from './WarningAlert/WarningAlert.component';
import { YellowNotification } from './YellowNotification/YellowNotification.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { GreenAlert } from './green-alert/green-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    YellowNotification,
    SuccessAlertComponent,
    GreenAlert
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, WarningComponent, YellowNotification, SuccessAlertComponent, GreenAlert]
})
export class AppModule { }
