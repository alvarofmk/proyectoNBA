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
  colorPpal: string = '';
  colorSec: string = '';
  colorLet: string = '';
  colorTexto: string = '';
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
      if (this.player.teamId == '1610612737') {
        this.colorPpal = 'background-color: rgb(200, 16, 46);'
        this.colorSec = 'background-color: rgb(253, 185, 39);'
        this.colorLet = 'color: black'
      } else if (this.player.teamId == '1610612738') {
        this.colorPpal = 'background-color: rgb(0, 122, 51);'
        this.colorSec = 'background-color: rgb(139, 111, 78);'
        this.colorLet = 'color: black'
      } else if (this.player.teamId == '1610612751') {
        this.colorPpal = 'background-color: rgb(0, 0, 0);'
        this.colorSec = 'background-color: rgb(255, 255, 255);'
        this.colorTexto = 'color: white'
      } else if (this.player.teamId == '1610612766') {
        this.colorPpal = 'background-color: rgb(29, 17, 96);'
        this.colorSec = 'background-color: rgb(0, 120, 140);'
        this.colorTexto = 'color: white'
      } else if (this.player.teamId == '1610612741') {
        this.colorPpal = 'background-color: rgb(206, 17, 65);'
        this.colorSec = 'background-color: rgb(6, 25, 34);'
        this.colorLet = 'color: white'
      } else if (this.player.teamId == '1610612739') {
        this.colorPpal = 'background-color: rgb(134, 0, 56);'
        this.colorSec = 'background-color: rgb(4, 30, 66);'
        this.colorLet = 'color: white'
        this.colorTexto = 'color: black'
      } else if (this.player.teamId == '1610612742') {
        this.colorPpal = 'background-color: rgb(0, 83, 188);'
        this.colorSec = 'background-color: rgb(0, 43, 92);'
        this.colorLet = 'color: white'
        this.colorTexto = 'color: black'
      } else if (this.player.teamId == '1610612743') {
        this.colorPpal = 'background-color: rgb(13, 34, 64);'
        this.colorSec = 'background-color: rgb(255, 198, 39);'
        this.colorTexto = 'color: white'
      } else if (this.player.teamId == '1610612765') {
        this.colorPpal = 'background-color: rgb(200,16,46);'
        this.colorSec = 'background-color: rgb(29,66,138);'
      } else if (this.player.teamId == '1610612744') {
        this.colorPpal = 'background-color: rgb(29, 66, 138);'
        this.colorSec = 'background-color: rgb(255, 199, 44);'
      } else if (this.player.teamId == '1610612745') {
        this.colorPpal = 'background-color: rgb(206,17,65);'
        this.colorSec = 'background-color: rgb(6,25,34);'
        this.colorLet = 'color: white'
        this.colorTexto = 'color: black'
      } else if (this.player.teamId == '1610612754') {
        this.colorPpal = 'background-color: rgb(0, 45, 98);'
        this.colorSec = 'background-color: rgb(253, 187, 48);'
        this.colorTexto = 'color: white'
      } else if (this.player.teamId == '1610612746') {
        this.colorPpal = 'background-color: rgb(200,16,46);'
        this.colorSec = 'background-color: rgb(29,66,148);'
      } else if (this.player.teamId == '1610612747') {
        this.colorPpal = 'background-color: rgb(85, 37, 130);'
        this.colorSec = 'background-color: rgb(253, 185, 39);'
      } else if (this.player.teamId == '1610612763') {
        this.colorPpal = 'background-color: rgb(93, 118, 169);'
        this.colorSec = 'background-color: rgb(18, 23, 63);'
        this.colorLet = 'color: white'
        this.colorTexto = 'color: black'
      } else if (this.player.teamId == '1610612748') {
        this.colorPpal = 'background-color: rgb(152, 0, 46);'
        this.colorSec = 'background-color: rgb(249, 160, 27);'
      } else if (this.player.teamId == '1610612749') {
        this.colorPpal = 'background-color: rgb(0, 71, 27);'
        this.colorSec = 'background-color: rgb(240, 235, 210);'
      } else if (this.player.teamId == '1610612750') {
        this.colorPpal = 'background-color: rgb(12, 35, 64);'
        this.colorSec = 'background-color: rgb(35, 97, 146);'
        this.colorTexto = 'color: white'
      } else if (this.player.teamId == '1610612740') {
        this.colorPpal = 'background-color: rgb(0, 22, 65);'
        this.colorSec = 'background-color: rgb(225, 58, 62);'
        this.colorTexto = 'color: white'
      } else if (this.player.teamId == '1610612752') {
        this.colorPpal = 'background-color: rgb(0, 107, 182);'
        this.colorSec = 'background-color: rgb(245, 132, 38);'
      } else if (this.player.teamId == '1610612760') {
        this.colorPpal = 'background-color: rgb(0, 125, 195);'
        this.colorSec = 'background-color: rgb(239, 59, 36);'
      } else if (this.player.teamId == '1610612753') {
        this.colorPpal = 'background-color: rgb(0, 125, 197);'
        this.colorSec = 'background-color: rgb(196, 206, 211);'
      } else if (this.player.teamId == '1610612755') {
        this.colorPpal = 'background-color: rgb(0, 107, 182);'
        this.colorSec = 'background-color: rgb(237, 23, 76);'
      } else if (this.player.teamId == '1610612756') {
        this.colorPpal = 'background-color: rgb(29, 17, 96);'
        this.colorSec = 'background-color: rgb(229, 95, 32);'
        this.colorTexto = 'color: white'
      } else if (this.player.teamId == '1610612757') {
        this.colorPpal = 'background-color: rgb(224, 58, 62);'
        this.colorSec = 'background-color: rgb(6, 25, 34);'
        this.colorLet = 'color: white'
        this.colorTexto = 'color: black'
      } else if (this.player.teamId == '1610612758') {
        this.colorPpal = 'background-color: rgb(91,43,130);'
        this.colorSec = 'background-color: rgb(99,113,122);'
      } else if (this.player.teamId == '1610612759') {
        this.colorPpal = 'background-color: rgb(196, 206, 211);'
        this.colorSec = 'background-color: rgb(6, 25, 34);'
        this.colorLet = 'color: white'
        this.colorTexto = 'color: black'
      } else if (this.player.teamId == '1610612761') {
        this.colorPpal = 'background-color: rgb(206, 17, 65);'
        this.colorSec = 'background-color: rgb(6, 25, 34);'
        this.colorLet = 'color: white'
        this.colorTexto = 'color: black'
      } else if (this.player.teamId == '1610612762') {
        this.colorPpal = 'background-color: rgb(0, 43, 92);'
        this.colorSec = 'background-color: rgb(0, 71, 27);'
        this.colorLet = 'color: white'
        this.colorTexto = 'color: black'
      } else if (this.player.teamId == '1610612764') {
        this.colorPpal = 'background-color: rgb(0,43,92);'
        this.colorSec = 'background-color: rgb(227,24,55);'
        this.colorTexto = 'color: white'
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

  volver(): void {
    this.router.navigate(['/players'])
  }
}