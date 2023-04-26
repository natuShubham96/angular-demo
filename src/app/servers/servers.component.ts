import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowedAdd = false;
  serverAdditionStatus = "No Server was created";
  serverName = '';
  userName: ''

  constructor() {
    setTimeout(() => {
      this.allowedAdd = true
    },2000)
  }

  onSeverCreation() {
    this.serverAdditionStatus = "Server Created! Name->"+this.serverName
  }

  onServerUpdate(event) {
    this.serverName = event.target.value
  }

  onUserNameUpdate(event) {
    this.userName = event.target.value
  }

  onResetUserName() {
    this.userName = ''
  }
}
