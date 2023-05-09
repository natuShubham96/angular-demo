import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  gameCounter = 0;
  @Output() gameStart = new EventEmitter<{gameCounter: number}>()
  @Input() gameStop;
  gameInterval;

  onGameStartClick() {
    this.gameInterval = setInterval(() => {
      this.gameStart.emit({gameCounter: this.gameCounter++});
    },1000)
  }

  onGameStopClick() {
    clearInterval(this.gameInterval)
  }

}
