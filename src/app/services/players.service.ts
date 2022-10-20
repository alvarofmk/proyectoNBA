import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayerResponse } from '../interfaces/players.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  public getPlayerList(year: number): Observable<PlayerResponse> {
    return this.http.get<PlayerResponse>(`${environment.API_BASE_URL}/10s/prod/v1/${year}/players.json`)
  }
}