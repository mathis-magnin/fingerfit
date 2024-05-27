import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { CongratsComponent } from './pages/congrats/congrats.component';
import { OptionsComponent } from './pages/options/options.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { PositionCreationComponent } from './pages/position-creation/position-creation.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';


import { HandsComponent } from './components/hand/hands.component';
import { KeyComponent } from './components/key/key.component'
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ExitButtonComponent } from './components/exit-button/exit-button.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { WarningPopupComponent } from './components/warning-popup/warning-popup.component';
import { TimerComponent } from './components/timer/timer.component';
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
import { PositionDescriptionTabComponent } from './components/position-description-tab/position-description-tab.component';
import { ProfileOptionsComponent } from './pages/profile-options/profile-options.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoProfileComponent } from './components/profile-info/profil-info.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { OptionComponent } from './components/option/option.component';
import { profilePictureComponent } from './components/profile-picture/profile-picture.component';

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
    HandsComponent,
    KeyComponent,
    KeyboardComponent,
    ButtonComponent,
    ExitButtonComponent,
    CheckboxComponent,
    QuizComponent,
    WarningPopupComponent,
    TimerComponent,
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
    PositionDescriptionTabComponent,
    NavbarComponent,
    InfoProfileComponent,
    SelectorComponent,
    ListComponent,
    ListItemComponent,
    SelectorComponent,
    OptionComponent,
    profilePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
