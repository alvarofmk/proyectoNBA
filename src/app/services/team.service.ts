import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamRosterResponse } from '../interfaces/team-roster.interface';
import { TeamResponse } from '../interfaces/teams.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  public getTeams(year: number):Observable<TeamResponse>{
    return this.http.get<TeamResponse>(`${environment.URL_BASE_API}/10s/prod/v1/${year}/teams.json`);
  }

  public getTeamRoster(year: number, teamName: string):Observable<TeamRosterResponse>{
    return this.http.get<TeamRosterResponse>(`${environment.URL_BASE_API}/10s/prod/v1/${year}/teams/${teamName}/roster.json`);
  }
}
