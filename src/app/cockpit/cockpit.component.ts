import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContent') serverContent;

  onAddServer(serverName) {
    this.serverCreated.emit({serverName: serverName.value, serverContent: this.serverContent.nativeElement.value})
  }

  onAddServerBlueprint(serverName) {
    this.blueprintCreated.emit({serverName: serverName.value, serverContent: this.serverContent.nativeElement.value})
  }

}
