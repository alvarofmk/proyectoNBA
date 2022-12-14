import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { PlayersComponent } from './components/player-list/players.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { DetailsPlayersComponent } from './components/details-players/details-players.component';
import { CompareStatsComponent } from './components/compare-stats/compare-stats.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'front-page' },
  { path: 'teams', component: TeamListComponent },
  { path: 'teams/:year/:teamName', component: TeamDetailsComponent },
  { path: 'front-page', component: FrontPageComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'details-player/:id/:year', component: DetailsPlayersComponent },
  { path: 'compare-players', component: CompareStatsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
