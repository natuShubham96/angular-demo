import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styles: [`
    .details {
      color: white;
    }
  `]
})
export class DisplayDetailsComponent {
  showPara = false;
  buttonClickArray = [];

  onDisplayDetailsClick() {
    this.showPara = !this.showPara
    this.buttonClickArray.push(new Date())
  }

}
