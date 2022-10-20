import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'front-page' },
  { path: 'front-page', component: FrontPageComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'players', component: PlayersComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
