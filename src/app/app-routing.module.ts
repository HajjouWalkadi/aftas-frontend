import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompetitionComponent } from './components/competition/list-competition/list-competition.component';
import { CreateCompetitionComponent } from './components/competition/create-competition/create-competition.component';
import { UpdateCompetitionComponent } from './components/competition/update-competition/update-competition.component';
import { ListFishComponent } from './components/fish/list-fish/list-fish.component';
import { CreateFishComponent } from './components/fish/create-fish/create-fish.component';
import { UpdateFishComponent } from './components/fish/update-fish/update-fish.component';
import { ListLevelComponent } from './components/level/list-level/list-level.component';
import { CreateLevelComponent } from './components/level/create-level/create-level.component';
import { UpdateLevelComponent } from './components/level/update-level/update-level.component';

const routes: Routes = [
  { path: 'competitions', component: ListCompetitionComponent },
  { path: 'competitions/create', component: CreateCompetitionComponent },
  { path: 'competitions/update', component: UpdateCompetitionComponent },
  { path: 'fish', component: ListFishComponent },
  { path: 'fish/create', component: CreateFishComponent },
  { path: 'fish/update', component: UpdateFishComponent },
  { path: 'levels', component: ListLevelComponent },
  { path: 'levels/create', component: CreateLevelComponent },
  { path: 'levels/update', component: UpdateLevelComponent },
  //{ path: 'levels/view/:code', component: LevelViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
