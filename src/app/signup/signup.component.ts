import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { GameService } from '../services/game.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  gameServices?: GameService;
  msgs: Message[] = [
    {
      severity: "warning",
      summary: "Warning",
      detail: "DO NOT use a secure password. This site is so very not secure. YOU HAVE BEEN WARNED.",
    },
  ];
  username: string = "";
  password: string = "";

  constructor(private gameService: GameService) {
    this.gameServices = this.gameService;
  }

  ngOnInit() {
  }

  testChara(word: string): boolean {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return !specialChars.test(word);
  }

  testLen(word: string): boolean {
    return (word.length >= 8) && (word.length <= 32);
  }

  canSubmit(): boolean {
    return this.testChara(this.username) && this.testChara(this.password) &&
    this.testLen(this.username) && this.testLen(this.password);
  }

  submit(): void {
    if (this.canSubmit()) {
      this.gameService.createUser(this.username, this.password).subscribe();
    }
  }
}
