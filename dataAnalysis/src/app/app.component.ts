import { Component, OnInit } from '@angular/core';
import { DataUpdateService } from './services/data-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dataAnalysis';

  constructor(public dataUpdateService: DataUpdateService) {}

  ngOnInit() {
    const allgames = this.dataUpdateService.getTodaysGames('2019-05-21');
    // const allgames = this.dataUpdateService.other();
    console.log(allgames);
  }
}

// http://165.227.107.6:5000/games?date='2019-05-21'