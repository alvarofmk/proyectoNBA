import { Component, OnInit } from '@angular/core';
import { DataCompare } from 'src/app/interfaces/data-compare.interface';
import { CareerSummary } from 'src/app/interfaces/player-stats.interface';
import { Player } from 'src/app/interfaces/players.interface';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-compare-stats',
  templateUrl: './compare-stats.component.html',
  styleUrls: ['./compare-stats.component.css']
})
export class CompareStatsComponent implements OnInit {

  datos: DataCompare[] = [];
  playerList: Player[] = [];
  player1: Player = {} as Player;
  player2: Player = {} as Player;
  summary1: CareerSummary = {} as CareerSummary;
  summary2: CareerSummary = {} as CareerSummary;

  constructor(private playerService: PlayersService) { }

  ngOnInit(): void {
    this.playerService.getPlayerList(2021).subscribe(resp => {
      this.playerList = resp.league.standard;
    });

    for (let player of this.playerList) {
      if (player.personId == '201142') {
        this.player1 = player
      } else if (player.personId == '203076') {
        this.player2 = player
      }
    }

    /*DURANT*/
    this.playerService.getStats(2021, '201142').subscribe(resp => {
      this.summary1 = resp.league.standard.stats.careerSummary;
    });

    /*ANTHONY DAVIDS*/
    this.playerService.getStats(2021, '203076').subscribe(resp => {
      this.summary2 = resp.league.standard.stats.careerSummary;
      debugger;
      this.datos = [...this.datos,
        { "name": this.player1.firstName, "value": parseInt(this.summary1.points) },
        { "name": "Durant", "value": parseInt(this.summary2.points) }
      ]
    });
  }
}