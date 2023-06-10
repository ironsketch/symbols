import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Player } from '../models/player.model';
import { Game } from '../models/game.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  topnav?: MenuItem[];
  gameServices?: GameService;
  loggedOnPlayer?: Player;
  username: string = '';
  password: string = '';
  selectedGame?: Game;
  games?: Game[];

  constructor(private gameService: GameService) {
    this.topnav = [
      {
          label: 'Options',
          items: [
            {
              label: 'Stats',
              routerLink: '/stats'
            }
          ]
      }
    ];
    this.gameServices = this.gameService;
    this.loggedOnPlayer = this.gameService.player;
    this.selectedGame = this.gameService.currentGame;
    this.games = this.gameService.playerGames;
  }

  ngOnInit(): void {
    
  }

  login(): void {
    console.log('login');
    this.gameServices!.login(this.username, this.password);
  }

  logout(): void {
    this.gameServices!.logout();
  }

  loggedIn(): boolean {
    return this.gameService.loggedIn();
  }
}
