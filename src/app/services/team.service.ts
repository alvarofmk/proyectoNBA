import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamResponse } from '../interfaces/teams.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  public getTeams(year: number):Observable<TeamResponse>{
    return this.http.get<TeamResponse>(`${environment.URL_BASE_API}/10s/prod/v1/${year}/teams.json`);
  }

}
