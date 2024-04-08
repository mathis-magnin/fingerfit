import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { CongratsComponent } from './pages/congrats/congrats.component';
import { OptionsComponent } from './pages/options/options.component';
import { HandComponent } from './components/hand/hand.component';
import { KeyComponent } from './components/key/key.component'
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ButtonComponent } from './components/button/button.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';
import { ExitButtonComponent } from './components/exit-button/exit-button.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { WarningPopupComponent } from './components/warning-popup/warning-popup.component';
import { SingleOptionComponent } from './components/single-option/single-option.component';
import { TimerComponent } from './components/timer/timer.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { ConfettiComponent } from './components/confetti/confetti.component';
import { SuperHandComponent } from './components/super-hand/super-hand.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    OptionsComponent,
    CongratsComponent,
    ProfilesComponent,

    AppComponent,
    ProgressBarComponent,
    HandComponent,
    KeyComponent,
    KeyboardComponent,
    ButtonComponent,
    ExitButtonComponent,
    CustomCheckboxComponent,
    QuizComponent,
    QuizListComponent,
    WarningPopupComponent,
    SingleOptionComponent,
    TimerComponent,
    QuizDetailsComponent,
    ConfettiComponent,
    SuperHandComponent,
    ProfileComponent,
    ProfileListComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
