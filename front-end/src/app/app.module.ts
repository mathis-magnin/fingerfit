import { NgModule, input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { CongratsComponent } from './pages/congrats/congrats.component';
import { OptionsComponent } from './pages/options/options.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { PositionCreationComponent } from './pages/position-creation/position-creation.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';


import { HandComponent } from './components/hand/hand.component';
import { KeyComponent } from './components/key/key.component'
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ButtonComponent } from './components/button/button.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
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
import { PopupComponent } from './components/popup/popup.component';
import { LoginComponent } from './components/login/login.component';
import { PositionComponent } from './components/position/position.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { ProfilePictureSelectionComponent } from './components/profile-picture-selection/profile-picture-selection.component';
import { InputTextFieldComponent } from './components/input-text-field/input-text-field.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { BoxComponent } from './components/box/box.component';
import { KeySelectionBoxComponent } from './components/key-selection-box/key-selection-box.component';
import { OrderSelectionBoxComponent } from './components/order-selection-box/order-selection-box.component';
import { PositionDescriptionTabComponent } from './components/position-description-tab/position-description-tab.component';
import { HandSelectionBoxComponent } from './components/hand-selection-box/hand-selection-box.component';
import { ProfileOptionsComponent } from './pages/profile-options/profile-options.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    OptionsComponent,
    CongratsComponent,
    ProfilesComponent,
    StatisticsComponent,
    PositionCreationComponent,
    ProfileOptionsComponent,

    AppComponent,
    ProgressBarComponent,
    HandComponent,
    KeyComponent,
    KeyboardComponent,
    ButtonComponent,
    ExitButtonComponent,
    CheckboxComponent,
    QuizComponent,
    QuizListComponent,
    WarningPopupComponent,
    SingleOptionComponent,
    TimerComponent,
    QuizDetailsComponent,
    ConfettiComponent,
    ProfileComponent,
    ProfileListComponent,
    PopupComponent,
    LoginComponent,
    PositionComponent,
    ProfilePictureSelectionComponent,
    InputTextFieldComponent,
    AddProfileComponent,
    GraphicComponent,
    SuperHandComponent,
    BoxComponent,
    KeySelectionBoxComponent,
    OrderSelectionBoxComponent,
    PositionDescriptionTabComponent,
    HandSelectionBoxComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
