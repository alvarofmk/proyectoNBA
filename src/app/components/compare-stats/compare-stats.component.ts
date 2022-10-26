import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { DataCompare, GroupedDataCompare } from 'src/app/interfaces/data-compare.interface';
import { ColorData } from 'src/app/interfaces/data.interface';
import { CareerSummary } from 'src/app/interfaces/player-stats.interface';
import { Player } from 'src/app/interfaces/players.interface';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-compare-stats',
  templateUrl: './compare-stats.component.html',
  styleUrls: ['./compare-stats.component.css']
})
export class CompareStatsComponent implements OnInit {

  /*POR PARTIDO*/
  porPartido: GroupedDataCompare[] = []

  /*DE TIRO*/
  tirosCampo: GroupedDataCompare[] = [];
  porcTirosCampo: DataCompare[] = [];
  tirosTres: GroupedDataCompare[] = [];
  porcTirosTres: DataCompare[] = [];
  tirosLibres: GroupedDataCompare[] = [];
  porcTirosLibres: DataCompare[] = [];

  /*TOTALES*/
  partidos: DataCompare[] = [];
  minutos: DataCompare[] = [];
  puntos: DataCompare[] = [];
  asistencias: DataCompare[] = [];
  bloqueos: DataCompare[] = [];
  robos: DataCompare[] = [];
  perdidas: DataCompare[] = [];
  rebotesOf: DataCompare[] = [];
  rebotesDef: DataCompare[] = [];
  rebotes: DataCompare[] = [];
  dd: DataCompare[] = [];
  td: DataCompare[] = [];

  /*OTROS*/
  year: number = 0;
  playerList: Player[] = [];
  yearList: number[] = [];
  player1: Player = {} as Player;
  player2: Player = {} as Player;
  summary1: CareerSummary = {} as CareerSummary;
  summary2: CareerSummary = {} as CareerSummary;
  mostrar1 = false;
  mostrar2 = false;
  mostrar3 = false;
  mostrar = false;

  constructor(private playerService: PlayersService) {
  }

  ngOnInit(): void {
    this.year = new Date().getFullYear();

    this.playerService.getPlayerList(this.year).subscribe(resp => {
      this.playerList = resp.league.standard;
    });

    for (let i = 1; i < 13; i++) {
      this.yearList.push(this.year - i);
    }
  }

  changeYear() {
    this.playerService.getPlayerList(this.year).subscribe(response =>
      this.playerList = response.league.standard)
  }

  viewImg(id: string) {
    return `https://cdn.nba.com/headshots/nba/latest/1040x760/${id}.png`
  }

  showStats1() {
    this.mostrar1 = true;
    this.mostrar2 = false;
    this.mostrar3 = false;

    this.playerService.getStats(this.year, this.player1.personId).subscribe(resp => {
      this.summary1 = resp.league.standard.stats.careerSummary;
      this.porPartido =
        [...this.porPartido,
        {
          "name": "Minutos",
          "series":
            [
              {
                "name": this.player1.firstName + ' ' + this.player1.lastName,
                "value": -parseInt(this.summary1.mpg)
              }
            ]
        },
        {
          "name": "Puntos",
          "series":
            [
              {
                "name": this.player1.firstName + ' ' + this.player1.lastName,
                "value": -parseInt(this.summary1.ppg)
              }
            ]
        },
        {
          "name": "Asistencias",
          "series":
            [
              {
                "name": this.player1.firstName + ' ' + this.player1.lastName,
                "value": -parseInt(this.summary1.apg)
              }
            ]
        },
        {
          "name": "Rebotes",
          "series":
            [
              {
                "name": this.player1.firstName + ' ' + this.player1.lastName,
                "value": -parseInt(this.summary1.rpg)
              }
            ]
        },
        {
          "name": "Bloqueos",
          "series":
            [
              {
                "name": this.player1.firstName + ' ' + this.player1.lastName,
                "value": -parseInt(this.summary1.bpg)
              }
            ]
        },
        {
          "name": "Robos",
          "series":
            [
              {
                "name": this.player1.firstName + ' ' + this.player1.lastName,
                "value": -parseInt(this.summary1.spg)
              }
            ]
        }
        ]
    });

    this.playerService.getStats(this.year, this.player2.personId).subscribe(resp => {
      this.summary2 = resp.league.standard.stats.careerSummary;
      this.porPartido =
        [...this.porPartido,
        {
          "name": "Minutos",
          "series":
            [
              {
                "name": this.player2.firstName + ' ' + this.player2.lastName,
                "value": parseInt(this.summary2.mpg)
              }
            ]
        },
        {
          "name": "Puntos",
          "series":
            [
              {
                "name": this.player2.firstName + ' ' + this.player2.lastName,
                "value": parseInt(this.summary2.ppg)
              }
            ]
        },
        {
          "name": "Asistencias",
          "series":
            [
              {
                "name": this.player2.firstName + ' ' + this.player2.lastName,
                "value": parseInt(this.summary2.apg)
              }
            ]
        },
        {
          "name": "Rebotes",
          "series":
            [
              {
                "name": this.player2.firstName + ' ' + this.player2.lastName,
                "value": parseInt(this.summary2.rpg)
              }
            ]
        },
        {
          "name": "Bloqueos",
          "series":
            [
              {
                "name": this.player2.firstName + ' ' + this.player2.lastName,
                "value": parseInt(this.summary2.bpg)
              }
            ]
        },
        {
          "name": "Robos",
          "series":
            [
              {
                "name": this.player2.firstName + ' ' + this.player2.lastName,
                "value": parseInt(this.summary2.spg)
              }
            ]
        }
        ]
    });
  }

  showStats2() {
    this.mostrar1 = false;
    this.mostrar2 = true;
    this.mostrar3 = false;

    this.playerService.getStats(this.year, this.player1.personId).subscribe(resp => {
      this.summary1 = resp.league.standard.stats.careerSummary;
      this.tirosCampo =
        [...this.tirosCampo,
        {
          "name": this.player1.firstName + ' ' + this.player1.lastName,
          "series":
            [
              {
                "name": "Tiros de campo lanzados",
                "value": parseInt(this.summary1.fga)
              },
              {
                "name": "Tiros de campo encestados",
                "value": parseInt(this.summary1.fgm)
              }
            ]
        }
        ]

      this.porcTirosCampo =
        [...this.porcTirosCampo,
        {
          "name": this.player1.firstName + ' ' + this.player1.lastName,
          "value": parseInt(this.summary1.fgp)
        }
        ]

      this.tirosTres =
        [...this.tirosTres,
        {
          "name": this.player1.firstName + ' ' + this.player1.lastName,
          "series":
            [
              {
                "name": "Tiros de tres lanzados",
                "value": parseInt(this.summary1.tpa)
              },
              {
                "name": "Tiros de tres encestados",
                "value": parseInt(this.summary1.tpm)
              }
            ]
        }
        ]

      this.porcTirosTres =
        [...this.porcTirosTres,
        {
          "name": this.player1.firstName + ' ' + this.player1.lastName,
          "value": parseInt(this.summary1.tpp)
        }
        ]

      this.tirosLibres =
        [...this.tirosLibres,
        {
          "name": this.player1.firstName + ' ' + this.player1.lastName,
          "series":
            [
              {
                "name": "Tiros de libres lanzados",
                "value": parseInt(this.summary1.fta)
              },
              {
                "name": "Tiros de libres encestados",
                "value": parseInt(this.summary1.ftm)
              }
            ]
        }
        ]

      this.porcTirosLibres =
        [...this.porcTirosLibres,
        {
          "name": this.player1.firstName + ' ' + this.player1.lastName,
          "value": parseInt(this.summary1.ftp)
        }
        ]
    });

    this.playerService.getStats(this.year, this.player2.personId).subscribe(resp => {
      this.summary2 = resp.league.standard.stats.careerSummary;
      this.tirosCampo =
        [...this.tirosCampo,
        {
          "name": this.player2.firstName + ' ' + this.player2.lastName,
          "series":
            [
              {
                "name": "Tiros de campo lanzados",
                "value": parseInt(this.summary2.fga)
              },
              {
                "name": "Tiros de campo encestados",
                "value": parseInt(this.summary2.fgm)
              }
            ]
        }
        ]
      this.porcTirosCampo =
        [...this.porcTirosCampo,
        {
          "name": this.player2.firstName + ' ' + this.player2.lastName,
          "value": parseInt(this.summary2.fgp)
        }
        ]

      this.tirosTres =
        [...this.tirosTres,
        {
          "name": this.player2.firstName + ' ' + this.player2.lastName,
          "series":
            [
              {
                "name": "Tiros de tres lanzados",
                "value": parseInt(this.summary2.tpa)
              },
              {
                "name": "Tiros de tres encestados",
                "value": parseInt(this.summary2.tpm)
              }
            ]
        }
        ]

      this.porcTirosTres =
        [...this.porcTirosTres,
        {
          "name": this.player2.firstName + ' ' + this.player2.lastName,
          "value": parseInt(this.summary2.tpp)
        }
        ]

      this.tirosLibres =
        [...this.tirosLibres,
        {
          "name": this.player2.firstName + ' ' + this.player2.lastName,
          "series":
            [
              {
                "name": "Tiros de libres lanzados",
                "value": parseInt(this.summary2.fta)
              },
              {
                "name": "Tiros de libres encestados",
                "value": parseInt(this.summary2.ftm)
              }
            ]
        }
        ]

      this.porcTirosLibres =
        [...this.porcTirosLibres,
        {
          "name": this.player2.firstName + ' ' + this.player2.lastName,
          "value": parseInt(this.summary2.ftp)
        }
        ]
    });
  }

  showStats3() {
    this.mostrar1 = false;
    this.mostrar2 = false;
    this.mostrar3 = true;

    this.playerService.getStats(this.year, this.player1.personId).subscribe(resp => {
      this.summary1 = resp.league.standard.stats.careerSummary;
      this.partidos = [...this.partidos,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.gamesPlayed) }
      ]

      this.minutos = [...this.minutos,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.min) }
      ]

      this.puntos = [...this.puntos,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.points) }
      ]

      this.asistencias = [...this.asistencias,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.assists) }
      ]

      this.bloqueos = [...this.bloqueos,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.blocks) }
      ]

      this.robos = [...this.robos,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.steals) }
      ]

      this.perdidas = [...this.perdidas,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.turnovers) }
      ]

      this.rebotesOf = [...this.rebotesOf,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.offReb) }
      ]

      this.rebotesDef = [...this.rebotesDef,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.defReb) }
      ]

      this.rebotes = [...this.rebotes,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.totReb) }
      ]

      this.dd = [...this.dd,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.dd2) }
      ]

      this.td = [...this.td,
      { "name": this.player1.firstName + ' ' + this.player1.lastName, "value": parseInt(this.summary1.td3) }
      ]
    });

    this.playerService.getStats(this.year, this.player2.personId).subscribe(resp => {
      this.summary2 = resp.league.standard.stats.careerSummary;
      this.partidos = [...this.partidos,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.gamesPlayed) }
      ]

      this.minutos = [...this.minutos,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.min) }
      ]

      this.puntos = [...this.puntos,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.points) }
      ]

      this.asistencias = [...this.asistencias,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.assists) }
      ]

      this.bloqueos = [...this.bloqueos,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.blocks) }
      ]

      this.robos = [...this.robos,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.steals) }
      ]

      this.perdidas = [...this.perdidas,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.turnovers) }
      ]

      this.rebotesOf = [...this.rebotesOf,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.offReb) }
      ]

      this.rebotesDef = [...this.rebotesDef,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.defReb) }
      ]

      this.rebotes = [...this.rebotes,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.totReb) }
      ]

      this.dd = [...this.dd,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.dd2) }
      ]

      this.td = [...this.td,
      { "name": this.player2.firstName + ' ' + this.player2.lastName, "value": parseInt(this.summary2.td3) }
      ]
    });
  }

  showStats() {
    this.mostrar = true;
  }
}