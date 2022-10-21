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
  color: string = '';
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

  bgc() {
    if (this.player.teamId == '1610612737') {
      this.color = 'background-color: rgb(200, 16, 46);'
    } else if (this.player.teamId == '1610612738') {
      this.color = 'background-color: rgb(0, 122, 51);'
    } else if (this.player.teamId == '1610612751') {
      this.color = 'background-color: rgb(0, 0, 0);'
    } else if (this.player.teamId == '1610612766') {
      this.color = 'background-color: rgb(29, 17, 96);'
    } else if (this.player.teamId == '1610612741') {
      this.color = 'background-color: rgb(206, 17, 65);'
    } else if (this.player.teamId == '1610612739') {
      this.color = 'background-color: rgb(134, 0, 56);'
    } else if (this.player.teamId == '1610612742') {
      this.color = 'background-color: rgb(0, 83, 188);'
    } else if (this.player.teamId == '1610612743') {
      this.color = 'background-color: rgb(13, 34, 64);'
    } else if (this.player.teamId == '1610612765') {
      this.color = 'background-color: rgb(200,16,46);'
    } else if (this.player.teamId == '1610612744') {
      this.color = 'background-color: rgb(29, 66, 138);'
    } else if (this.player.teamId == '1610612745') {
      this.color = 'background-color: rgb(206,17,65);'
    } else if (this.player.teamId == '1610612754') {
      this.color = 'background-color: rgb(0, 45, 98);'
    } else if (this.player.teamId == '1610612746') {
      this.color = 'background-color: rgb(200,16,46);'
    } else if (this.player.teamId == '1610612747') {
      this.color = 'background-color: rgb(85, 37, 130);'
    } else if (this.player.teamId == '1610612763') {
      this.color = 'background-color: rgb(93, 118, 169);'
    } else if (this.player.teamId == '1610612748') {
      this.color = 'background-color: rgb(152, 0, 46);'
    } else if (this.player.teamId == '1610612749') {
      this.color = 'background-color: rgb(0, 71, 27);'
    } else if (this.player.teamId == '1610612750') {
      this.color = 'background-color: rgb(12, 35, 64);'
    } else if (this.player.teamId == '1610612740') {
      this.color = 'background-color: rgb(0, 22, 65);'
    } else if (this.player.teamId == '1610612752') {
      this.color = 'background-color: rgb(0, 107, 182);'
    } else if (this.player.teamId == '1610612760') {
      this.color = 'background-color: rgb(0, 125, 195);'
    } else if (this.player.teamId == '1610612753') {
      this.color = 'background-color: rgb(0, 125, 197);'
    } else if (this.player.teamId == '1610612755') {
      this.color = 'background-color: rgb(0, 107, 182);'
    } else if (this.player.teamId == '1610612756') {
      this.color = 'background-color: rgb(29, 17, 96);'
    } else if (this.player.teamId == '1610612757') {
      this.color = 'background-color: rgb(224, 58, 62);'
    } else if (this.player.teamId == '1610612758') {
      this.color = 'background-color: rgb(91,43,130);'
    } else if (this.player.teamId == '1610612759') {
      this.color = 'background-color: rgb(196, 206, 211);'
    } else if (this.player.teamId == '1610612761') {
      this.color = 'background-color: rgb(206, 17, 65);'
    } else if (this.player.teamId == '1610612762') {
      this.color = 'background-color: rgb(0, 43, 92);'
    } else if (this.player.teamId == '1610612764') {
      this.color = 'background-color: rgb(0,43,92);'
    } else {
      this.color = 'background-color: white;'
    }
    return this.color;
  }
}