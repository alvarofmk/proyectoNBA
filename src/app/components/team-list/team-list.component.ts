import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/teams.interface';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teamURLbase1: string = 'https://cdn.nba.com/logos/nba/'
  teamURLbase2: string = '/global/L/logo.svg'
  teamList: Team[] = [];
  year: number = 0;
  yearList : number[] = []

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.yearList.push(this.year);
    this.teamService.getTeams(this.year).subscribe(response => {
      this.teamList = response.league.standard
      this.teamList = this.teamList.filter(team => team.isNBAFranchise)
    })
    for (let i = 1; i < 5; i++) {
      this.yearList.push(this.year-i);
    }
  }

  changeYear(){
    this.teamService.getTeams(this.year).subscribe(response => {
      this.teamList = response.league.standard
      this.teamList = this.teamList.filter(team => team.isNBAFranchise)})
  }

}
