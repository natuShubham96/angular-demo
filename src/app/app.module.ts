import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {ServerComponent} from "./Server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import {SuccessAlertComponent} from "./success-alert/success-alert.component";
import {AlertsComponent} from "./Alerts/alerts.component";
import {FormsModule} from "@angular/forms";
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerDetailsComponent } from './server-details/server-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AlertsComponent,
    DisplayDetailsComponent,
    CockpitComponent,
    ServerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
