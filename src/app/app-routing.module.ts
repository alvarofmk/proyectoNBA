import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { DetailsPlayersComponent } from './components/details-players/details-players.component';
import { PlayersComponent } from './components/player-list/players.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'teams' },
  { path: 'teams', component: TeamListComponent },
  { path: 'teams/:year/:teamName', component: TeamDetailsComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'details-player/:id', component: DetailsPlayersComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
