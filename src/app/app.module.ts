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
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighlight } from './basic-highlight/basicHighlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ActiveUsersComponent } from './active-users/active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users/inactive-users.component';
import { ActiveuserDetailsComponent } from './active-users/activeuser-details/activeuser-details.component';
import { InactiveDetailsComponent } from './inactive-users/inactive-details/inactive-details.component';
import { CounterService } from './user-services/counter-service.service';

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
    ServerDetailsComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlight,
    BetterHighlightDirective,
    UnlessDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ActiveuserDetailsComponent,
    InactiveDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
