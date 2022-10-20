import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeamListComponent } from './components/team-list/team-list.component';
import { FormsModule } from '@angular/forms';
import { PlayersComponent } from './components/players/players.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    PlayersComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
