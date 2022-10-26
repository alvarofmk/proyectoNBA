import { Component, Input, OnInit } from '@angular/core';
import { Standard } from 'src/app/interfaces/schedule.interface';

@Component({
  selector: 'app-team-match-single-card',
  templateUrl: './team-match-single-card.component.html',
  styleUrls: ['./team-match-single-card.component.css']
})
export class TeamMatchSingleCardComponent implements OnInit {

  @Input() match: Standard = {} as Standard;
  teamURLbase1: string = 'https://cdn.nba.com/logos/nba/'
  teamURLbase2: string = '/global/L/logo.svg'

  constructor() { }

  ngOnInit(): void {
  }

  getWinner(match: Standard){
    let result = 0;
    if(Number(match.hTeam.score) > Number(match.vTeam.score)){
      result = 1;
    }else if(Number(match.vTeam.score) > Number(match.hTeam.score)){
      result = 2;
    }
    return result;
  }

}
