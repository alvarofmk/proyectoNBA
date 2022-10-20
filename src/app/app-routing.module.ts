import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPlayersComponent } from './components/details-players/details-players.component';
import { PlayersComponent } from './components/player-list/players.component';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/players' },
  { path: 'index', component: TeamListComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'details-player/:id', component: DetailsPlayersComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
