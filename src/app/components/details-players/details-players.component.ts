import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CareerSummary } from 'src/app/interfaces/player-stats.interface';
import { Draft, Player, TeamPlayed } from 'src/app/interfaces/players.interface';
import { Team } from 'src/app/interfaces/teams.interface';
import { PlayersService } from 'src/app/services/players.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-details-players',
  templateUrl: './details-players.component.html',
  styleUrls: ['./details-players.component.css']
})
export class DetailsPlayersComponent implements OnInit {

  id: string = '';
  player: Player = {} as Player
  summary: CareerSummary = {} as CareerSummary
  playerList: Player[] = [];
  teamList: Team[] = [];
  teamPlayed: string[] = [];
  teamDraft: string = '';
  yearList: number[] = [];
  year: number = 0;
  teamURLbase1: string = 'https://cdn.nba.com/logos/nba/'
  teamURLbase2: string = '/global/L/logo.svg'

  constructor(private route: ActivatedRoute, private router: Router, private playerService: PlayersService, private teamService: TeamService) { }

  ngOnInit(): void {
    /*this.id = this.route.snapshot.paramMap.get('id')!;
    this.year = this.route.snapshot.paramMap.get('year')!;*/
    this.route.params.subscribe(resp => {
      this.id = resp['id']
      this.year = resp['year']
    });

    this.playerService.getPlayerList(this.year).subscribe(resp => {
      for (let player of resp.league.standard) {
        if (player.personId == this.id) {
          this.player = player
        }
      }
    });

    this.playerService.getStats(this.year, this.id).subscribe(resp => {
      this.summary = resp.league.standard.stats.careerSummary
    });

    this.teamService.getTeams(this.year).subscribe(resp => {
      this.teamList = resp.league.standard;
    });
  }

  viewImg(personId: string) {
    return `https://cdn.nba.com/headshots/nba/latest/1040x760/${personId}.png`
  }

  showTeam(teamId: string) {
    for (let team of this.teamList) {
      if (team.teamId == teamId) {
        return team.fullName;
      }
    }
    return undefined
  }

  position(pos: string) {
    if (pos == 'C') {
      return 'Pívot'
    } else if (pos == 'F') {
      return 'Alero'
    } else if (pos == 'G') {
      return 'Escolta'
    } else if (pos == 'C-F') {
      return 'Ala-Pívot'
    } else {
      return 'Base'
    }
  }

  teamsPlayed(teams: TeamPlayed[]) {
    for (let team of teams) {
      for (let teamL of this.teamList) {
        if (team.teamId == teamL.teamId) {
          if (this.teamPlayed.length == 0) {
            this.teamPlayed.push(teamL.fullName)
          } else if (!this.teamPlayed.includes(teamL.fullName)) {
            this.teamPlayed.push(teamL.fullName)
          }
        }
      }
    }
    return this.teamPlayed
  }

  checkTeamId(team: string) {
    for (let teamL of this.teamList) {
      if (team == teamL.fullName) {
        return teamL.teamId
      }
    }
    return undefined
  }

  teamDrafted(draft: Draft) {
    for (let team of this.teamList) {
      if (draft.teamId == team.teamId) {
        this.teamDraft = team.fullName
      }
    }
    return this.teamDraft
  }
}