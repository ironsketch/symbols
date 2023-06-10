import { Square } from "./square.model";

export class Game {
    id?: number;
    player1Id?: string;
    player2Id?: string;
    player1CardId?: Square;
    player2CardId?: Square;
    finished?: boolean;
    player1Notes?: string;
    player2Notes?: string;
    turn?: number;
    won?: boolean;
    player1Turns?: number;
    player2Turns?: number;

    constructor(id?: number, player1Id?: string, player2Id?: string, player1CardId?: Square, player2CardId?: Square,
        finished?: boolean, player1Notes?: string, player2Notes?: string, turn?: number, won?: boolean, player1Turns?: number, player2Turns?: number) {
            
        this.id = id;
        this.player1Id = player1Id;
        this.player2Id = player2Id;
        this.player1CardId = player1CardId;
        this.player2CardId = player2CardId;
        this.finished = finished;
        this.player1Notes = player1Notes;
        this.player2Notes = player2Notes;
        this.turn = turn;
        this.won = won;
        this.player1Turns = player1Turns;
        this.player2Turns = player2Turns;
    }
}