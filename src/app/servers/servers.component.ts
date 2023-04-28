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
  userName='';
  isServerNameSubmitted= false;
  servers = ['Server 1', 'Server 2']

  constructor() {
    setTimeout(() => {
      this.allowedAdd = true
    },2000)
  }

  onSeverCreation() {
    this.isServerNameSubmitted = true;
    this.servers.push(this.serverName)
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
