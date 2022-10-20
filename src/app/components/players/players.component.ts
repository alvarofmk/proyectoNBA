import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/players.interface';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playerList: Player[] = []

  constructor(private playerService: PlayersService) { }

  ngOnInit(): void {
    this.playerService.getPlayerList(2021).subscribe(resp => {
      this.playerList = resp.league.standard;
    })
  }

  viewImg(id: string) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
  }
}
