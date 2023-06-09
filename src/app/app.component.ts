import { Component } from '@angular/core';
import { UserService } from './user-services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  servers = [{name:'Test',type: 'Server',content:'Test'}];
  gameCounter;
  value: number;

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

  onGameStart(gameData: {gameCounter: number}) {
    this.gameCounter = gameData.gameCounter;
    this.value = gameData.gameCounter;
  }

}
