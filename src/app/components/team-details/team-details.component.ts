import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/interfaces/players.interface';
import { Team } from 'src/app/interfaces/teams.interface';
import { TeamService } from 'src/app/services/team.service';
import { PlayersService } from 'src/app/services/players.service';
import { ScheduleResponse, Standard } from 'src/app/interfaces/schedule.interface';
import { League, Stats, StatsResponse, TeamSeasonStats } from 'src/app/interfaces/player-stats.interface';
import { ChartData, ColorData } from 'src/app/interfaces/data.interface';

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
  leagueinitial: League = {} as League;
  playerStats: Map<string, League> = new Map([ [ '', this.leagueinitial ] ]);
  year: number = 0;
  stat: string = '';
  teamSchedule: ScheduleResponse = {} as ScheduleResponse;
  rbgPpal: string = '';
  colorPpal: string = '';
  colorSec: string = '';
  colorLet: string = '';
  colorTexto: string = '';
  yearList : number[] = [];
  currentYear: number = new Date().getFullYear();
  datos: ChartData[] = [];
  customColor: ColorData[] = [];
  statsExample: TeamSeasonStats | undefined;
  axisLegend: string = '';

  constructor(private teamService: TeamService, private router: Router, private playerService: PlayersService, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit(): void {
    let teamUrlName: string = '';
    this.route.params.subscribe((parametros => {
      teamUrlName = parametros['teamName'];
      this.year = parametros['year']
      for (let i = 0; i < 8; i++) {
        this.yearList.push(this.currentYear-i);
      }}))
    this.teamService.getTeams(this.year).subscribe(response => {
      this.teamWwrapper = response.league.standard.find(team => team.urlName == teamUrlName);
      if(this.teamWwrapper !== undefined){
        this.teamDetails = this.teamWwrapper;
      }
      this.setColours();
      this.teamService.getTeamRoster(this.year, teamUrlName).subscribe(rosterResponse => {
        this.playerService.getPlayerList(this.year).subscribe(allPlayersResponse => {
          this.teamRoster = allPlayersResponse.league.standard.filter(player => rosterResponse.league.standard.players.map(playerFlat => playerFlat.personId).includes(player.personId));
          this.teamRoster.forEach(player => {
            this.playerService.getStats(this.year, player.personId).subscribe(statResponse => {
              debugger;
              this.playerStats.set(player.personId, statResponse.league)
              if(this.statsExample == undefined){
                let playerStatWrapper = this.playerStats.get(player.personId)
                if(playerStatWrapper != undefined){

                  this.statsExample = playerStatWrapper.standard.stats.regularSeason.season[0].teams[0];
                  debugger;
                }
              }
              this.datos = [...this.datos, {"name": player.firstName, "value": this.getStatAsValue(statResponse.league, this.year, this.teamDetails.teamId, this.stat)}];
              this.customColor = [...this.customColor, {"name": player.firstName, "value": this.rbgPpal}]
            });
          })
        })
      })
      this.teamService.getTeamSchedule(this.year, teamUrlName).subscribe(response => this.teamSchedule = response)
    })
  }

  getStatAsValue(response: League, year: number, teamid: string, stat: string){
    let finalStatsChecked: TeamSeasonStats = {} as TeamSeasonStats;
    let season = response.standard.stats.regularSeason.season.find(season => season.seasonYear == year);
    let resultado: number = 0;
    if(season != undefined){
      let seasonChecked = season;
      let finalStats = seasonChecked.teams.find(team => team.teamId == teamid);
      if(finalStats != undefined){
        finalStatsChecked = finalStats;
        type statKey = keyof typeof finalStatsChecked;
        let statPicked = stat as statKey;
        resultado = parseInt(finalStatsChecked[statPicked]);
      }
    }
    debugger;
    return resultado;
  }

  updateStats(){
    this.axisLegend = this.stat;
    this.datos = [];
    this.teamRoster.forEach(player => {
      let leagueWrapper = this.playerStats.get(player.personId);
      let league: League = {} as League;
      if(leagueWrapper != undefined){
        league = leagueWrapper;
      }
      this.datos = [...this.datos, {"name": player.firstName, "value": this.getStatAsValue(league, this.year, this.teamDetails.teamId, this.stat)}]
    });
  }

  viewImg(id: string) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
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

  setColours(){
    switch (this.teamDetails.teamId) {
      case '1610612737':
        this.rbgPpal = 'rgb(200, 16, 46)'
        this.colorPpal = 'background-color: rgb(200, 16, 46);'
        this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(253, 185, 39));'
        this.colorLet = 'color: black'
        break;
      case '1610612738':
        this.rbgPpal = 'rgb(0, 122, 51)'
          this.colorPpal = 'background-color: rgb(0, 122, 51);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(139, 111, 78));'
          this.colorLet = 'color: black'
          break;
      case '1610612751':
        this.rbgPpal = 'rgb(0, 0, 0)'
          this.colorPpal = 'background-color: rgb(0, 0, 0);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(255, 255, 255));'
          this.colorTexto = 'color: white'
          break;
      case '1610612766':
        this.rbgPpal = 'rgb(29, 17, 96)'
          this.colorPpal = 'background-color: rgb(29, 17, 96);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(0, 120, 140));'
          this.colorTexto = 'color: white'
          break;
      case '1610612741':
        this.rbgPpal = 'rgb(206, 17, 65)'
          this.colorPpal = 'background-color: rgb(206, 17, 65);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(6, 25, 34));'
          this.colorLet = 'color: white'
          break;
      case '1610612739':
        this.rbgPpal = 'rgb(134, 0, 56)'
          this.colorPpal = 'background-color: rgb(134, 0, 56);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(4, 30, 66));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612742':
        this.rbgPpal = 'rgb(0, 83, 188)'
          this.colorPpal = 'background-color: rgb(0, 83, 188);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(0, 43, 92));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612743':
        this.rbgPpal = 'rgb(13, 34, 64)'
          this.colorPpal = 'background-color: rgb(13, 34, 64);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(255, 198, 39));'
          this.colorTexto = 'color: white'
          break;
      case '1610612765':
        this.rbgPpal = 'rgb(200,16,46)'
          this.colorPpal = 'background-color: rgb(200,16,46);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(29,66,138));'
          break;
      case '1610612744':
        this.rbgPpal = 'rgb(29, 66, 138)'
          this.colorPpal = 'background-color: rgb(29, 66, 138);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(255, 199, 44));'
          break;
      case '1610612745':
        this.rbgPpal = 'rgb(206,17,65)'
          this.colorPpal = 'background-color: rgb(206,17,65);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(6,25,34));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612754':
        this.rbgPpal = 'rgb(0, 45, 98)'
          this.colorPpal = 'background-color: rgb(0, 45, 98);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(253, 187, 48));'
          this.colorTexto = 'color: white'
          break;
      case '1610612746':
        this.rbgPpal = 'rgb(200,16,46)'
          this.colorPpal = 'background-color: rgb(200,16,46);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(29,66,148));'
          break;
      case '1610612747':
        this.rbgPpal = 'rgb(85, 37, 130)'
          this.colorPpal = 'background-color: rgb(85, 37, 130);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(253, 185, 39));'
          break;
      case '1610612763':
        this.rbgPpal = 'rgb(93, 118, 169)'
          this.colorPpal = 'background-color: rgb(93, 118, 169);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(18, 23, 63));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612748':
        this.rbgPpal = 'rgb(152, 0, 46)'
          this.colorPpal = 'background-color: rgb(152, 0, 46);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(249, 160, 27));'
          break;
      case '1610612749':
        this.rbgPpal = 'rgb(0, 71, 27)'
          this.colorPpal = 'background-color: rgb(0, 71, 27);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(240, 235, 210));'
          break;
      case '1610612750':
        this.rbgPpal = 'rgb(12, 35, 64)'
          this.colorPpal = 'background-color: rgb(12, 35, 64);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(35, 97, 146));'
          this.colorTexto = 'color: white'
          break;
      case '1610612740':
        this.rbgPpal = 'rgb(0, 22, 65)'
          this.colorPpal = 'background-color: rgb(0, 22, 65);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(225, 58, 62));'
          this.colorTexto = 'color: white'
          break;
      case '1610612752':
        this.rbgPpal = 'rgb(0, 107, 182)'
          this.colorPpal = 'background-color: rgb(0, 107, 182);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(245, 132, 38));'
          break;
      case '1610612760':
        this.rbgPpal = 'rgb(0, 125, 195)'
          this.colorPpal = 'background-color: rgb(0, 125, 195);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(239, 59, 36));'
          break;
      case '1610612753':
        this.rbgPpal = 'rgb(0, 125, 197)'
          this.colorPpal = 'background-color: rgb(0, 125, 197);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(196, 206, 211));'
          break;
      case '1610612755':
        this.rbgPpal = 'rgb(0, 107, 182)'
          this.colorPpal = 'background-color: rgb(0, 107, 182);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(237, 23, 76));'
          break;
      case '1610612756':
        this.rbgPpal = 'rgb(29, 17, 96)'
          this.colorPpal = 'background-color: rgb(29, 17, 96);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(229, 95, 32));'
          this.colorTexto = 'color: white'
          break;
      case '1610612757':
        this.rbgPpal = 'rgb(224, 58, 62)'
          this.colorPpal = 'background-color: rgb(224, 58, 62);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(6, 25, 34));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612758':
        this.rbgPpal = 'rgb(91,43,130)'
          this.colorPpal = 'background-color: rgb(91,43,130);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(99,113,122));'
          break;
      case '1610612759':
        this.rbgPpal = 'rgb(196, 206, 211)'
          this.colorPpal = 'background-color: rgb(196, 206, 211);'
          this.colorSec = 'rgb(6, 25, 34);'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612761':
        this.rbgPpal = 'rgb(206, 17, 65)'
          this.colorPpal = 'background-color: rgb(206, 17, 65);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(6, 25, 34));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612762':
        this.rbgPpal = 'rgb(0, 43, 92)'
          this.colorPpal = 'background-color: rgb(0, 43, 92);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(0, 71, 27));'
          this.colorLet = 'color: white'
          this.colorTexto = 'color: black'
          break;
      case '1610612764':
        this.rbgPpal = 'rgb(0,43,92)'
          this.colorPpal = 'background-color: rgb(0,43,92);'
          this.colorSec = 'filter: drop-shadow(0px 10px 0px rgb(227,24,55));'
          this.colorTexto = 'color: white'
    }
  }

  changeYear(){
    debugger;
    this.router.navigate(['teams/' + this.year + '/' + this.teamDetails.urlName])
  }

}
