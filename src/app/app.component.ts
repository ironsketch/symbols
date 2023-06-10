import { Component } from '@angular/core';
import { Defaults } from './helpers/defaults';
import { Square } from './models/square.model';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'symbols';
  topnav = [];
  gameServices?: GameService;
  username: string = '';
  password: string = '';

  constructor(private gameService: GameService) {
    this.gameServices = this.gameService;
  }

  loggedIn(): boolean {
    return this.gameService.loggedIn();
  }
}
