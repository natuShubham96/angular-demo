import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [{name:'Test',type: 'Server',content:'Test'}];

  onAddServer(serverData : {serverName: string, serverContent: string}) {
    this.servers.push({
      type: 'Server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onAddServerBlueprint(blueprintData: {serverName: string, serverContent: string}) {
    this.servers.push({
      type: 'Server Blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

}
