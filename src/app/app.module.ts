import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeamListComponent } from './components/team-list/team-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayersComponent } from './components/player-list/players.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { DetailsPlayersComponent } from './components/details-players/details-players.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ScaleLinear, ScalePoint, ScaleTime } from 'd3-scale';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    PlayersComponent,
    DetailsPlayersComponent,
    TeamDetailsComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
