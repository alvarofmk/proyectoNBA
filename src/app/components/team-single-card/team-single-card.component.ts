import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/teams.interface';

@Component({
  selector: 'app-team-single-card',
  templateUrl: './team-single-card.component.html',
  styleUrls: ['./team-single-card.component.css']
})
export class TeamSingleCardComponent implements OnInit {

  @Input() team: Team = {} as Team;
  @Input() year: number = 0;
  teamURLbase1: string = 'https://cdn.nba.com/logos/nba/'
  teamURLbase2: string = '/global/L/logo.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
