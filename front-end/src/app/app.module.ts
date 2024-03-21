import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { CongratsComponent } from './pages/congrats/congrats.component';
import { OptionsComponent } from './pages/options/options.component';
import { KeyComponent } from './components/key/key.component';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    OptionsComponent,
    CongratsComponent,
    KeyComponent,
    CustomCheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
