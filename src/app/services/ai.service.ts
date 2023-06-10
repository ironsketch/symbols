import { Injectable } from '@angular/core';
import { Defaults } from '../helpers/defaults';
import { Square } from '../models/square.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Game } from '../models/game.model';
import { Opponents } from '../models/opponents.model';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class AIService {
    location?: [string, number];
    gameBoard?: Square[][];
    games: Game[] = [];
    opponents: Opponents[] = [];
    players: Player[] = [];
    player?: Player;
    currentGame?: Game;
    playerOpponents?: Opponents[];
    playerGames: Game[] = [];

    constructor(private http: HttpClient) { 
        this.gameBoard = Defaults.getBoard();
        this.getPlayers().subscribe(r => {
            this.getGames().subscribe(r2 => {
                this.getOpponents().subscribe(r3 => {
                    this.login('', '');
                });
            });
        });
    } 

    loggedIn(): boolean {
        return this.player != undefined;
    }

    convertGames(data: any): Game {
        const id = Number(data[0]);
        const pid1 = Number(data[1]);
        const pid2 = Number(data[2]);
        const won = Number(data[9]) === 1;
        const finished = Number(data[6]) === 1;
        const player1 = this.players!.find(p => p.id === pid1);
        const player2 = this.players!.find(p => p.id === pid2);
        return new Game(id, player1!.playerName!, player2!.playerName!, 
            this.getSquare(Number(data[3])), this.getSquare(Number(data[4])), 
            finished, data[6], data[7], data[8], won);
    }

    getSquare(id: number): Square {
        let squareFound: Square;
        for (let i = 0; i < this.gameBoard!.length; i++) {
            for (let j = 0; j < this.gameBoard![i].length; j++) {
                if (this.gameBoard![i][j].id === id) {
                    return this.gameBoard![i][j];
                }
            }
        }
        return squareFound!;
    }

    convertOpponents(data: any): Opponents {
        const id = Number(data[0]);
        const pid1 = Number(data[1]);
        const pid2 = Number(data[2]);
        const won1 = Number(data[3]) === 1;
        const won2 = Number(data[4]) === 1;
        const player1 = this.players!.find(p => p.id === pid1);
        const player2 = this.players!.find(p => p.id === pid2);
        return new Opponents(id, player1!.playerName!, player2!.playerName!, won1, won2);
    }

    convertPlayers(data: any): Player {
        const id = Number(data[0]);
        return new Player(id, data[1]);
    }

    getGames(): Observable<boolean> {
        return this.http.get<any>('assets/api/game').pipe(
            map(data => {
                data['data'].forEach((d: any) => {
                    this.games.push(this.convertGames(d));
                });
                return true;
            })
        );
    }

    getOpponents(): Observable<boolean> {
        return this.http.get<any>('assets/api/opponents').pipe(
            map(data => {
                data['data'].forEach((d: any) => {
                    this.opponents.push(this.convertOpponents(d));
                });
                return true;
            })
        );
    }

    getPlayers(): Observable<boolean> {
        return this.http.get<any>('assets/api/player').pipe(
            map(data => {
                data['data'].forEach((d: any) => {
                    this.players.push(this.convertPlayers(d));
                });
                return true;
            })
        );
    }

    login(username: string, password: string): void {
        if (document.cookie) {
            console.log('cookie exists');
            const cookie = this.getCookie();
            const cUsername: string = cookie['username'];
            const cDate = new Date(cookie['exp']);
            const todaysDate = new Date();

            if (cDate > todaysDate) {
                this.setupPlayer(cUsername);
            } else {
                this.loginTest(username, password).subscribe();
            }
        } else {
            console.log('cookie no exists');
            this.loginTest(username, password).subscribe();
        }
    }

    setupPlayer(username: string): void {
        this.playerOpponents = [];
        this.playerGames = [];
        this.player = this.players.find(p => p.playerName === username);
        this.opponents.forEach(o => {
            if (o.player1Id === this.player!.id || o.player2Id === this.player!.playerName) {
                this.playerOpponents!.push(o);
            }
        });
        this.games.forEach(g => {
            if (g.player1Id === this.player!.id || g.player2Id === this.player!.playerName) {
                this.playerGames!.push(g);
            }
        });
        console.log(this.playerGames);
    }

    logout(): void {
        this.player = undefined;
        document.cookie = '';
    }

    loginTest(username: string, password: string): Observable<boolean> {
        console.log('loginTest');
        return this.http.get<any>('assets/api/login?username=' + username + '&password=' + password).pipe(
            map(data => {
                const result = data['data'];
                console.log(result);
                if (result) {
                    this.setupPlayer(username);
                    this.setCookie(username);
                }
                return result;
            })
        );
    }

    createUser(username: string, password: string): Observable<boolean> {
        const player = new PlayerConf(username, password);
        return this.http.post(`assets/api/insertplayer`, { data: player }).pipe(
            map((res: any) => {
                this.players.push(new Player(Number(res['data']), username));
                return res;
            })
        );
    }

    getCookie(): any {
        return JSON.parse(document.cookie);
    }
    
    setCookie(username: string): void {
        let date = new Date();
        date.setDate(date.getDate() + 7);

        const json = {
            'username': username,
            'exp': date
        };

        document.cookie = JSON.stringify(json);
    }

}

export class PlayerConf {
    username?: string;
    password?: string;

    constructor(username?: string, password?: string) {
        this.username = username;
        this.password = password;
    }
}
