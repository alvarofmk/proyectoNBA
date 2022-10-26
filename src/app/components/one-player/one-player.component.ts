import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/players.interface';
import { Team } from 'src/app/interfaces/teams.interface';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-one-player',
  templateUrl: './one-player.component.html',
  styleUrls: ['./one-player.component.css']
})
export class OnePlayerComponent implements OnInit {

  @Input() player: Player = {} as Player;
  @Input() year: number = 0;
  colorPpal: string = '';
  colorTexto: string = '';
  teamURLbase1: string = 'https://cdn.nba.com/logos/nba/';
  teamURLbase2: string = '/global/L/logo.svg';
  teamList: Team[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams(this.year).subscribe(resp => {
      this.teamList = resp.league.standard;
    });
  }

  viewImg(id: string) {
    return `https://cdn.nba.com/headshots/nba/latest/1040x760/${id}.png`
  }

  showTeam(teamId: string) {
    for (let team of this.teamList) {
      if (team.teamId == teamId) {
        return team.fullName;
      }
    }
    return undefined;
  }

  background(id: string) {
    switch (id) {
      case '1610612737':
        this.colorPpal = 'background-color: rgb(200, 16, 46);'
        break;
      case '1610612738':
        this.colorPpal = 'background-color: rgb(0, 122, 51);'
        break;
      case '1610612751':
        this.colorPpal = 'background-color: rgb(0, 0, 0);'
        this.colorTexto = 'color: white'
        break;
      case '1610612766':
        this.colorPpal = 'background-color: rgb(29, 17, 96);'
        this.colorTexto = 'color: white'
        break;
      case '1610612741':
        this.colorPpal = 'background-color: rgb(206, 17, 65);'
        break;
      case '1610612739':
        this.colorPpal = 'background-color: rgb(134, 0, 56);'
        this.colorTexto = 'color: black'
        break;
      case '1610612742':
        this.colorPpal = 'background-color: rgb(0, 83, 188);'
        this.colorTexto = 'color: black'
        break;
      case '1610612743':
        this.colorPpal = 'background-color: rgb(13, 34, 64);'
        this.colorTexto = 'color: white'
        break;
      case '1610612765':
        this.colorPpal = 'background-color: rgb(200,16,46);'
        break;
      case '1610612744':
        this.colorPpal = 'background-color: rgb(29, 66, 138);'
        break;
      case '1610612745':
        this.colorPpal = 'background-color: rgb(206,17,65);'
        this.colorTexto = 'color: black'
        break;
      case '1610612754':
        this.colorPpal = 'background-color: rgb(0, 45, 98);'
        this.colorTexto = 'color: white'
        break;
      case '1610612746':
        this.colorPpal = 'background-color: rgb(200,16,46);'
        break;
      case '1610612747':
        this.colorPpal = 'background-color: rgb(85, 37, 130);'
        break;
      case '1610612763':
        this.colorPpal = 'background-color: rgb(93, 118, 169);'
        this.colorTexto = 'color: black'
        break;
      case '1610612748':
        this.colorPpal = 'background-color: rgb(152, 0, 46);'
        break;
      case '1610612749':
        this.colorPpal = 'background-color: rgb(0, 71, 27);'
        break;
      case '1610612750':
        this.colorPpal = 'background-color: rgb(12, 35, 64);'
        this.colorTexto = 'color: white'
        break;
      case '1610612740':
        this.colorPpal = 'background-color: rgb(0, 22, 65);'
        this.colorTexto = 'color: white'
        break;
      case '1610612752':
        this.colorPpal = 'background-color: rgb(0, 107, 182);'
        break;
      case '1610612760':
        this.colorPpal = 'background-color: rgb(0, 125, 195);'
        break;
      case '1610612753':
        this.colorPpal = 'background-color: rgb(0, 125, 197);'
        break;
      case '1610612755':
        this.colorPpal = 'background-color: rgb(0, 107, 182);'
        break;
      case '1610612756':
        this.colorPpal = 'background-color: rgb(29, 17, 96);'
        this.colorTexto = 'color: white'
        break;
      case '1610612757':
        this.colorPpal = 'background-color: rgb(224, 58, 62);'
        this.colorTexto = 'color: black'
        break;
      case '1610612758':
        this.colorPpal = 'background-color: rgb(91,43,130);'
        break;
      case '1610612759':
        this.colorPpal = 'background-color: rgb(196, 206, 211);'
        this.colorTexto = 'color: black'
        break;
      case '1610612761':
        this.colorPpal = 'background-color: rgb(206, 17, 65);'
        this.colorTexto = 'color: black'
        break;
      case '1610612762':
        this.colorPpal = 'background-color: rgb(0, 43, 92);'
        this.colorTexto = 'color: black'
        break;
      case '1610612764':
        this.colorPpal = 'background-color: rgb(0,43,92);'
        this.colorTexto = 'color: white'
        break;
    }
    return this.colorPpal
  }

  color(id: string) {
    switch (id) {
      case '1610612751':
        this.colorTexto = 'color: white;';
        break;
      case '1610612766':
        this.colorTexto = 'color: white;';
        break;
      case '1610612742':
        this.colorTexto = 'color: white;';
        break;
      case '1610612743':
        this.colorTexto = 'color: white;';
        break;
      case '1610612754':
        this.colorTexto = 'color: white;';
        break;
      case '1610612750':
        this.colorTexto = 'color: white;';
        break;
      case '1610612740':
        this.colorTexto = 'color: white;';
        break;
      case '1610612756':
        this.colorTexto = 'color: white;';
        break;
      case '1610612764':
        this.colorTexto = 'color: white;';
        break;
    }
    return this.colorTexto
  }

}
