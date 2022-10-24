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

}
