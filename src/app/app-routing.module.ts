import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './components/players/players.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'teams' },
  { path: 'teams', component: TeamListComponent },
  { path: 'teams/:teamName', component: TeamDetailsComponent },
  { path: 'players', component: PlayersComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
