import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { CongratsComponent } from './pages/congrats/congrats.component';
import { OptionsComponent } from './pages/options/options.component';
import { KeyComponent } from './components/key/key.component';
import { ButtonComponent } from './components/button/button.component';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';
import { ExitButtonComponent } from './components/exit-button/exit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    OptionsComponent,
    CongratsComponent,
    KeyComponent,
    ButtonComponent,
    CustomCheckboxComponent,
    ExitButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
