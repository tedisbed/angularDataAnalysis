import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentGame } from '../models/current-game.module';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-response.module';

@Injectable({
  providedIn: 'root'
})
export class DataUpdateService {

  constructor(public http: HttpClient) { }

  async getTodaysGames(date: string): Promise<CurrentGame[]> {
    const endpoint = `${environment.apiEndpoint}${environment.games.endpoint}?date='${date}'`;
    return this.http.get<ApiResponse<CurrentGame[]>>(endpoint)
      .toPromise()
      .then(res => res.data );
  }

  async updateOdds(obj: CurrentGame): Promise<CurrentGame> {
    const endpoint = `${environment.apiEndpoint}${environment.odds.endpoint}`;
    return this.http.post<ApiResponse<CurrentGame>>(endpoint, obj)
    .toPromise()
    .then(res => res.data);
  }
}
