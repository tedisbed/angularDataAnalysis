import { Component, OnInit } from '@angular/core';
import { DataUpdateService } from './services/data-update.service';
import { CurrentGame } from './models/current-game.module';

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

    this.dataUpdateService.getTodaysGames(mm + '/' + dd + '/' + yyyy)
    .then(a => {
      this.allGames = a;
      if (this.allGames !== null && (this.allGames[0].away_line === null || this.allGames[0].home_line === null)) {
        this.linesNeeded = true;
      }
    });
  }

  OnClick() {
    console.log(this.allGames);
    this.linesNeeded = false;
  }
}
