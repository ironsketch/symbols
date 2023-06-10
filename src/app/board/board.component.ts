import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Square } from '../models/square.model';
import { Defaults } from '../helpers/defaults';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
  gameServices?: GameService;
  board?: Square[][];
  rows = Defaults.rows;

  constructor(private gameService: GameService) {
    this.gameServices = this.gameService;
    this.board = this.gameService.gameBoard;
  }

  ngOnInit() {
  }

}
