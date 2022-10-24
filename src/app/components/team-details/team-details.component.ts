import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaces/players.interface';
import { Team } from 'src/app/interfaces/teams.interface';
import { TeamService } from 'src/app/services/team.service';
import { PlayersService } from 'src/app/services/players.service';
import { ScheduleResponse, Standard } from 'src/app/interfaces/schedule.interface';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  teamURLbase1: string = 'https://cdn.nba.com/logos/nba/'
  teamURLbase2: string = '/global/L/logo.svg'
  teamWwrapper: Team | undefined;
  teamDetails: Team = {} as Team;
  teamRoster: Player[] = [];
  year: number = 0;
  teamSchedule: ScheduleResponse = {} as ScheduleResponse;
  colorPpal: string = '';
  colorSec: string = '';
  colorLet: string = '';
  colorTexto: string = '';

  constructor(private teamService: TeamService, private playerService: PlayersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let teamUrlName: string = '';
    this.route.params.subscribe((parametros => {
      teamUrlName = parametros['teamName'];
      this.year = parametros['year']}))
    this.teamService.getTeams(this.year).subscribe(response => {
      this.teamWwrapper = response.league.standard.find(team => team.urlName == teamUrlName);
      if(this.teamWwrapper !== undefined){
        this.teamDetails = this.teamWwrapper;
      }
      this.teamService.getTeamRoster(this.year, teamUrlName).subscribe(rosterResponse => {
        this.playerService.getPlayerList(this.year).subscribe(allPlayersResponse => {
          this.teamRoster = allPlayersResponse.league.standard.filter(player => rosterResponse.league.standard.players.map(playerFlat => playerFlat.personId).includes(player.personId));
        })
      })
      this.teamService.getTeamSchedule(this.year, teamUrlName).subscribe(response => this.teamSchedule = response)
      this.setColours();
    })
  }

  viewImg(id: string) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
  }

  getWinner(match: Standard){
    debugger;
    let result = 0;
    if(Number(match.hTeam.score) > Number(match.vTeam.score)){
      result = 1;
    }else if(Number(match.vTeam.score) > Number(match.hTeam.score)){
      result = 2;
    }
    return result;
  }

  setColours(){
    switch (this.teamDetails.teamId) {
      case '1610612737':
        this.colorPpal = 'background-color: rgb(200, 16, 46);'
        this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(253, 185, 39));'
        this.colorLet = 'color: black'
        break;
      case '1610612738':
          this.colorPpal = 'background-color: rgb(0, 122, 51);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(139, 111, 78));'
          this.colorLet = 'color: black'
          break;
      case '1610612751':
          this.colorPpal = 'background-color: rgb(0, 0, 0);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(255, 255, 255));'
          this.colorTexto = 'color: white'
          break;
      case '1610612766':
          this.colorPpal = 'background-color: rgb(29, 17, 96);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(0, 120, 140));'
          this.colorTexto = 'color: white'
          break;
      case '1610612741':
          this.colorPpal = 'background-color: rgb(206, 17, 65);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(6, 25, 34));'
          this.colorLet = 'color: white'
          break;
      case '1610612739':
          this.colorPpal = 'background-color: rgb(134, 0, 56);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(4, 30, 66));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612742':
          this.colorPpal = 'background-color: rgb(0, 83, 188);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(0, 43, 92));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612743':
          this.colorPpal = 'background-color: rgb(13, 34, 64);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(255, 198, 39));'
          this.colorTexto = 'color: white'
          break;
      case '1610612765':
          this.colorPpal = 'background-color: rgb(200,16,46);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(29,66,138));'
          break;
      case '1610612744':
          this.colorPpal = 'background-color: rgb(29, 66, 138);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(255, 199, 44));'
          break;
      case '1610612745':
          this.colorPpal = 'background-color: rgb(206,17,65);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(6,25,34));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612754':
          this.colorPpal = 'background-color: rgb(0, 45, 98);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(253, 187, 48));'
          this.colorTexto = 'color: white'
          break;
      case '1610612746':
          this.colorPpal = 'background-color: rgb(200,16,46);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(29,66,148));'
          break;
      case '1610612747':
          this.colorPpal = 'background-color: rgb(85, 37, 130);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(253, 185, 39));'
          break;
      case '1610612763':
          this.colorPpal = 'background-color: rgb(93, 118, 169);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(18, 23, 63));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612748':
          this.colorPpal = 'background-color: rgb(152, 0, 46);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(249, 160, 27));'
          break;
      case '1610612749':
          this.colorPpal = 'background-color: rgb(0, 71, 27);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(240, 235, 210));'
          break;
      case '1610612750':
          this.colorPpal = 'background-color: rgb(12, 35, 64);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(35, 97, 146));'
          this.colorTexto = 'color: white'
          break;
      case '1610612740':
          this.colorPpal = 'background-color: rgb(0, 22, 65);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(225, 58, 62));'
          this.colorTexto = 'color: white'
          break;
      case '1610612752':
          this.colorPpal = 'background-color: rgb(0, 107, 182);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(245, 132, 38));'
          break;
      case '1610612760':
          this.colorPpal = 'background-color: rgb(0, 125, 195);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(239, 59, 36));'
          break;
      case '1610612753':
          this.colorPpal = 'background-color: rgb(0, 125, 197);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(196, 206, 211));'
          break;
      case '1610612755':
          this.colorPpal = 'background-color: rgb(0, 107, 182);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(237, 23, 76));'
          break;
      case '1610612756':
          this.colorPpal = 'background-color: rgb(29, 17, 96);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(229, 95, 32));'
          this.colorTexto = 'color: white'
          break;
      case '1610612757':
          this.colorPpal = 'background-color: rgb(224, 58, 62);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(6, 25, 34));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612758':
          this.colorPpal = 'background-color: rgb(91,43,130);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(99,113,122));'
          break;
      case '1610612759':
          this.colorPpal = 'background-color: rgb(196, 206, 211);'
          this.colorSec = 'rgb(6, 25, 34);'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612761':
          this.colorPpal = 'background-color: rgb(206, 17, 65);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(6, 25, 34));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612762':
          this.colorPpal = 'background-color: rgb(0, 43, 92);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(0, 71, 27));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612764':
          this.colorPpal = 'background-color: rgb(0,43,92);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(227,24,55));'
          this.colorTexto = 'color: white'
    }
  }

}
