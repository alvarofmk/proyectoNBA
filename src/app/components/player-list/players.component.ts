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
  colorPpal: string = '';
  colorTexto: string = '';
  filteredTeamList: Team[] = [];
  filteredPlayerList: Player[] = [];
  playerList: Player[] = [];
  teamList: Team[] = [];
  yearList: number[] = [];
  year: number = 0;
  teamURLbase1: string = 'https://cdn.nba.com/logos/nba/';
  teamURLbase2: string = '/global/L/logo.svg';

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

  background(id: string) {
    if (id == '1610612737') {
      this.colorPpal = 'background-color: rgb(200, 16, 46);'
    } else if (id == '1610612738') {
      this.colorPpal = 'background-color: rgb(0, 122, 51);'
    } else if (id == '1610612751') {
      this.colorPpal = 'background-color: rgb(0, 0, 0);'
      this.colorTexto = 'color: white'
    } else if (id == '1610612766') {
      this.colorPpal = 'background-color: rgb(29, 17, 96);'
      this.colorTexto = 'color: white'
    } else if (id == '1610612741') {
      this.colorPpal = 'background-color: rgb(206, 17, 65);'
    } else if (id == '1610612739') {
      this.colorPpal = 'background-color: rgb(134, 0, 56);'
    } else if (id == '1610612742') {
      this.colorPpal = 'background-color: rgb(0, 83, 188);'
    } else if (id == '1610612743') {
      this.colorPpal = 'background-color: rgb(13, 34, 64);'
      this.colorTexto = 'color: white'
    } else if (id == '1610612765') {
      this.colorPpal = 'background-color: rgb(200,16,46);'
    } else if (id == '1610612744') {
      this.colorPpal = 'background-color: rgb(29, 66, 138);'
    } else if (id == '1610612745') {
      this.colorPpal = 'background-color: rgb(206,17,65);'
    } else if (id == '1610612754') {
      this.colorPpal = 'background-color: rgb(0, 45, 98);'
      this.colorTexto = 'color: white'
    } else if (id == '1610612746') {
      this.colorPpal = 'background-color: rgb(200,16,46);'
    } else if (id == '1610612747') {
      this.colorPpal = 'background-color: rgb(85, 37, 130);'
    } else if (id == '1610612763') {
      this.colorPpal = 'background-color: rgb(93, 118, 169);'
    } else if (id == '1610612748') {
      this.colorPpal = 'background-color: rgb(152, 0, 46);'
    } else if (id == '1610612749') {
      this.colorPpal = 'background-color: rgb(0, 71, 27);'
    } else if (id == '1610612750') {
      this.colorPpal = 'background-color: rgb(12, 35, 64);'
      this.colorTexto = 'color: white'
    } else if (id == '1610612740') {
      this.colorPpal = 'background-color: rgb(0, 22, 65);'
      this.colorTexto = 'color: white'
    } else if (id == '1610612752') {
      this.colorPpal = 'background-color: rgb(0, 107, 182);'
    } else if (id == '1610612760') {
      this.colorPpal = 'background-color: rgb(0, 125, 195);'
    } else if (id == '1610612753') {
      this.colorPpal = 'background-color: rgb(0, 125, 197);'
    } else if (id == '1610612755') {
      this.colorPpal = 'background-color: rgb(0, 107, 182);'
    } else if (id == '1610612756') {
      this.colorPpal = 'background-color: rgb(29, 17, 96);'
      this.colorTexto = 'color: white'
    } else if (id == '1610612757') {
      this.colorPpal = 'background-color: rgb(224, 58, 62);'
    } else if (id == '1610612758') {
      this.colorPpal = 'background-color: rgb(91,43,130);'
    } else if (id == '1610612759') {
      this.colorPpal = 'background-color: rgb(196, 206, 211);'
    } else if (id == '1610612761') {
      this.colorPpal = 'background-color: rgb(206, 17, 65);'
    } else if (id == '1610612762') {
      this.colorPpal = 'background-color: rgb(0, 43, 92);'
    } else if (id == '1610612764') {
      this.colorPpal = 'background-color: rgb(0,43,92);'
      this.colorTexto = 'color: white'
    }
    return this.colorPpal
  }

  color(id: string) {
    if (id == '1610612751') {
      this.colorTexto = 'color: white'
    } else if (id == '1610612766') {
      this.colorTexto = 'color: white'
    } else if (id == '1610612742') {
    } else if (id == '1610612743') {
      this.colorTexto = 'color: white'
    } else if (id == '1610612754') {
      this.colorTexto = 'color: white'
    } else if (id == '1610612750') {
      this.colorTexto = 'color: white'
    } else if (id == '1610612740') {
      this.colorTexto = 'color: white'
    } else if (id == '1610612756') {
      this.colorTexto = 'color: white'
    } else if (id == '1610612764') {
      this.colorTexto = 'color: white'
    } else {
      this.colorTexto = 'color: black'
    }
    return this.colorTexto
  }
}