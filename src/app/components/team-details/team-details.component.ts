import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaces/players.interface';
import { Team } from 'src/app/interfaces/teams.interface';
import { TeamService } from 'src/app/services/team.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  teamDetails: Team | undefined;
  teamRoster: Player[] = [];
  year: number = 2021;

  constructor(private teamService: TeamService, private playerService: PlayersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let teamUrlName = '';
    this.route.params.subscribe(routeParams => teamUrlName = routeParams['teamName'])
    this.teamService.getTeams(this.year).subscribe(response => {
      this.teamDetails = response.league.standard.find(team => team.urlName == teamUrlName);
      this.teamService.getTeamRoster(this.year, teamUrlName).subscribe(rosterResponse => {
        this.playerService.getPlayerList(this.year).subscribe(allPlayersResponse => {
          rosterResponse.league.standard.players.
        })
      })
    })
  }

}
