import { Component, Input, OnInit } from '@angular/core';
import { Square } from '../models/square.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() square?: Square;
  gameServices?: GameService;

  constructor(private gameService: GameService) {
    this.gameServices = this.gameService;
  }

  ngOnInit() {
  }

  highlight(loc: [string, number]) {
    this.gameService.location = loc;
  }
}
