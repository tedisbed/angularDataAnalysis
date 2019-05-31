import { Component, OnInit } from '@angular/core';
import { DataUpdateService } from './services/data-update.service';
import { CurrentGame } from './models/current-game.module';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Baseball Betting';
  linesNeeded = false;
  displayedColumns: string[] = ['Home', 'Home Starter', 'Away', 'Away Starter', 'Home Line',
   'Away Line', 'Prediction'];

  constructor(public dataUpdateService: DataUpdateService) {}

  allGames: CurrentGame[];

  ngOnInit() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    console.log(mm + '/' + dd + '/' + yyyy);
    this.dataUpdateService.getTodaysGames(mm + '/' + dd + '/' + yyyy)
    .then(a => {
      this.allGames = a;
      this.allGames.forEach(game => {
        if (game.away_line == null || game.home_line == null) {
          this.linesNeeded = true;
        }
      });
    });
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    const date = new Date(event.value);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    console.log(mm + '/' + dd + '/' + yyyy);
    this.dataUpdateService.getTodaysGames(mm + '/' + dd + '/' + yyyy)
    .then(a => this.allGames = a);
  }

  OnClick(event) {
    this.allGames.forEach( game => {
      this.dataUpdateService.updateOdds(game);
      console.log(game);
      console.log(event);
    });
  }

  OnEdit() {
    this.linesNeeded = true;
  }
}
