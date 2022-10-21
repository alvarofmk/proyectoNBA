import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/players.interface';
import { Team } from 'src/app/interfaces/teams.interface';
import { PlayersService } from 'src/app/services/players.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playerList: Player[] = [];
  teamList: Team[] = [];
  yearList: number[] = []
  year: number = 0;
  teamURLbase1: string = 'https://cdn.nba.com/logos/nba/'
  teamURLbase2: string = '/global/L/logo.svg'

  constructor(private playerService: PlayersService, private teamService: TeamService) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();

    this.playerService.getPlayerList(this.year).subscribe(resp => {
      this.playerList = resp.league.standard;
    })

    this.teamService.getTeams(this.year).subscribe(resp => {
      this.teamList = resp.league.standard;
    })

    for (let i = 1; i < 13; i++) {
      this.yearList.push(this.year - i);
    }
  }

  viewImg(id: string) {
    return `https://cdn.nba.com/headshots/nba/latest/1040x760/${id}.png`
  }

  changeYear() {
    this.playerService.getPlayerList(this.year).subscribe(response =>
      this.playerList = response.league.standard)
  }

  showTeam(teamId: string) {
    for (let team of this.teamList) {
      if (team.teamId == teamId) {
        return team.fullName;
      }
    }
    return undefined
  }
}