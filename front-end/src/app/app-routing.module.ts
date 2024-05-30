import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { CongratsComponent } from './pages/congrats/congrats.component';
import { OptionsComponent } from './pages/options/options.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { PositionsComponent } from './pages/positions/positions.component';
import { ProfileOptionsComponent } from './pages/profile-options/profile-options.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'congrats', component: CongratsComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'positions', component: PositionsComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profile-options', component: ProfileOptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
