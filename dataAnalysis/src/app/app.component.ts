import { Component, OnInit } from '@angular/core';
import { DataUpdateService } from './services/data-update.service';
import { CurrentGame } from './models/current-game.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'My Huge Cock';
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
    .then(a => this.allGames = a);
    console.log(this.allGames);
  }
}