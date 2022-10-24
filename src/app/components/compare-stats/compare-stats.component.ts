import { Component, OnInit } from '@angular/core';
import { CareerSummary } from 'src/app/interfaces/player-stats.interface';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-compare-stats',
  templateUrl: './compare-stats.component.html',
  styleUrls: ['./compare-stats.component.css']
})
export class CompareStatsComponent implements OnInit {

  summary1: CareerSummary = {} as CareerSummary;
  summary2: CareerSummary = {} as CareerSummary;

  constructor(private playerService: PlayersService) { }

  ngOnInit(): void {
    /*DURANT*/
    this.playerService.getStats(2021, '201142').subscribe(resp => {
      this.summary1 = resp.league.standard.stats.careerSummary
    });

    /*ANTHONY DAVIDS*/
    this.playerService.getStats(2021, '203076').subscribe(resp => {
      this.summary2 = resp.league.standard.stats.careerSummary
    });
  }

  compare() {
    const datos = [
      { "name": "KEVIN DURANT", "value": this.summary1.points },
      { "name": "ANTHONY DAVIDS", "value": this.summary2.points }
    ]
    return datos
  }

  compare2() {
    const datos = [
      {
        "name": "KEVIN DURANT",
        "value": this.summary1.points,
      },
      {
        "name": "ANTHONY DAVIDS",
        "value": this.summary2.points,
      }]
    return datos
  }
}