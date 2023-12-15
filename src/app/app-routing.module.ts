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
import { ListMemberComponent } from './components/member/list-member/list-member.component';
import { CreateMemberComponent } from './components/member/create-member/create-member.component';
import { UpdateMemberComponent } from './components/member/update-member/update-member.component';
import { ViewMemberComponent } from './components/member/view-member/view-member.component';
import { ListHuntingComponent } from './components/hunting/list-hunting/list-hunting.component';
import { CreateHuntingComponent } from './components/hunting/create-hunting/create-hunting.component';
import { UpdateHuntingComponent } from './components/hunting/update-hunting/update-hunting.component';
import { ViewHuntingComponent } from './components/hunting/view-hunting/view-hunting.component';
import { CreateRankingComponent } from './components/ranking/create-ranking/create-ranking.component';
import { ViewRankingComponent } from './components/ranking/view-ranking/view-ranking.component';
import { ListRankingComponent } from './components/ranking/list-ranking/list-ranking.component';
import { UpdateRankingComponent } from './components/ranking/update-ranking/update-ranking.component';

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

  { path: 'members', component: ListMemberComponent },
  { path: 'members/create', component: CreateMemberComponent },
  { path: 'members/update/:referenceNumber', component: UpdateMemberComponent },
  { path: 'members/view/:referenceNumber', component: ViewMemberComponent },

  { path: 'hunting', component: ListHuntingComponent },
  { path: 'hunting/create', component: CreateHuntingComponent },
  { path: 'hunting/update/:id', component: UpdateHuntingComponent },
  { path: 'hunting/view/:id', component: ViewHuntingComponent },
  { path: 'fishes', component: ListFishComponent },

  { path: 'rankings', component: ListRankingComponent },
  { path: 'rankings/create', component: CreateRankingComponent },
  { path: 'rankings/update/:id', component: UpdateRankingComponent },
  { path: 'rankings/view/:id', component: ViewRankingComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
