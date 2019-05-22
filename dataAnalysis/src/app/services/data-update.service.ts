import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentGame } from '../models/current-game.module';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-response.module';

@Injectable({
  providedIn: 'root'
})
export class DataUpdateService {

  mockData: any = [{
    "date": "2019-05-21",
    "home": "Cleveland Indians",
    "away": "Oakland Athletics",
    "home_line": null,
    "away_line": null,
    "prediction": "Oakland Athletics"
  }, {
    "date": "2019-05-21",
    "home": "Milwaukee Brewers",
    "away": "Cincinnati Reds",
    "home_line": null,
    "away_line": null,
    "prediction": "Milwaukee Brewers"
  }];

  constructor(public http: HttpClient) { }

  getTodaysGames(date: string): Promise<CurrentGame[]> {
    const currentGames = this.http.get<ApiResponse<CurrentGame[]>>(
      `${environment.apiEndpoint}${environment.games.endpoint}`, { headers: {date: "'2019-05-21'"} })
      .toPromise()
      .then(res => res.data);

    return currentGames;
  }

  other() {
    return this.mockData;
  }
}

