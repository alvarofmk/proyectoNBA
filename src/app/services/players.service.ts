import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StatsResponse } from '../interfaces/player-stats.interface';
import { PlayerResponse } from '../interfaces/players.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  public getPlayerList(year: number): Observable<PlayerResponse> {
    return this.http.get<PlayerResponse>(`${environment.URL_BASE_API}/10s/prod/v1/${year}/players.json`)
  }

  public getStats(year: number, personId: string): Observable<StatsResponse> {
    return this.http.get<StatsResponse>(`${environment.URL_BASE_API}/10s/prod/v1/${year}/players/${personId}_profile.json`)
  }
}