export class Opponents {
    id?: number;
    player1Id?: string;
    player2Id?: string;
    player1Wins?: boolean;
    player2Wins?: boolean;

    constructor(id?: number, player1Id?: string, player2Id?: string, player1Wins?: boolean, player2Wins?: boolean) {
        this.id = id;
        this.player1Id = player1Id;
        this.player2Id = player2Id;
        this.player1Wins = player1Wins;
        this.player2Wins = player2Wins;
    }
}