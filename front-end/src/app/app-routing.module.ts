import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { CongratsComponent } from './pages/congrats/congrats.component';
import { OptionsComponent } from './pages/options/options.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'congrats', component: CongratsComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'profiles', component: ProfilesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
