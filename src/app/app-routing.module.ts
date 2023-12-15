import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompetitionComponent } from './components/competition/list-competition/list-competition.component';
import { CreateCompetitionComponent } from './components/competition/create-competition/create-competition.component';
import { UpdateCompetitionComponent } from './components/competition/update-competition/update-competition.component';
import { ListFishComponent } from './components/fish/list-fish/list-fish.component';
import { CreateFishComponent } from './components/fish/create-fish/create-fish.component';
import { UpdateFishComponent } from './components/fish/update-fish/update-fish.component';

const routes: Routes = [
  { path: 'competitions', component: ListCompetitionComponent },
  { path: 'competitions/create', component: CreateCompetitionComponent },
  { path: 'competitions/update', component: UpdateCompetitionComponent },
  { path: 'fish', component: ListFishComponent },
  { path: 'fish/create', component: CreateFishComponent },
  { path: 'fish/update', component: UpdateFishComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
