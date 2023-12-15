import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFishComponent } from './components/fish/list-fish/list-fish.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeadComponent } from './components/head/head.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListCompetitionComponent } from './components/competition/list-competition/list-competition.component';
import { CreateCompetitionComponent } from './components/competition/create-competition/create-competition.component';
import { UpdateCompetitionComponent } from './components/competition/update-competition/update-competition.component';
import { CreateFishComponent } from './components/fish/create-fish/create-fish.component';
import { UpdateFishComponent } from './components/fish/update-fish/update-fish.component';
import { ListHuntingComponent } from './components/hunting/list-hunting/list-hunting.component';
import { CreateHuntingComponent } from './components/hunting/create-hunting/create-hunting.component';
import { UpdateHuntingComponent } from './components/hunting/update-hunting/update-hunting.component';
import { ViewHuntingComponent } from './components/hunting/view-hunting/view-hunting.component';
import { ListLevelComponent } from './components/level/list-level/list-level.component';
import { CreateLevelComponent } from './components/level/create-level/create-level.component';
import { UpdateLevelComponent } from './components/level/update-level/update-level.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFishComponent, 
    SideBarComponent,
    HeadComponent,
    ListCompetitionComponent,
    CreateCompetitionComponent,
    UpdateCompetitionComponent,
    CreateFishComponent,
    UpdateFishComponent,
    ListHuntingComponent,
    CreateHuntingComponent,
    UpdateHuntingComponent,
    ViewHuntingComponent,
    ListLevelComponent,
    CreateLevelComponent,
    UpdateLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
