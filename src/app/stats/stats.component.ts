import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';
import { Opponents } from '../models/opponents.model';
import { Player } from '../models/player.model';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent  implements OnInit {
  gameServices?: GameService;
  playerGames?: Game[];
  playerOpponents?: Opponents[];
  player?: Player;

  constructor(private gameService: GameService) {
    this.gameServices = this.gameService;
    this.playerGames = this.gameService.playerGames;
    this.playerOpponents = this.gameService.playerOpponents;
    this.player = this.gameService.player;
  }

  ngOnInit(): void {
    
  }

}
