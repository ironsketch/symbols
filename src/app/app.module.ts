import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { GameService } from './services/game.service';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    SignupComponent,
    HeaderComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    PasswordModule,
    AccordionModule,
    DividerModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
