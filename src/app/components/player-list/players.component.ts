import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  teams = new FormControl('');
  filteredTeamList: Team[] = [];
  filteredPlayerList: Player[] = [];
  playerList: Player[] = [];
  teamList: Team[] = [];
  yearList: number[] = [];
  year: number = 0;

  constructor(private playerService: PlayersService, private teamService: TeamService) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();

    this.playerService.getPlayerList(this.year).subscribe(resp => {
      this.playerList = resp.league.standard;
      this.filteredPlayerList = this.playerList
    })

    this.teamService.getTeams(this.year).subscribe(resp => {
      this.teamList = resp.league.standard;
    })

    for (let i = 1; i < 13; i++) {
      this.yearList.push(this.year - i);
    }
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
    return undefined;
  }

  changeList() {
    let listAux: Player[] = [];
    for (let player of this.playerList) {
      for (let team of this.filteredTeamList) {
        if (player.teamId == team.teamId) {
          listAux.push(player);
        }
      }
    }
    if (listAux.length == 0) {
      this.filteredPlayerList = this.playerList
    } else {
      this.filteredPlayerList = listAux
    }
  }
}