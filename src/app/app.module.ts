import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FruitListComponent} from './fruit-list/fruit-list.component';
import {FruitAddComponent} from './fruit-add/fruit-add.component';
import {FruitsSectionComponent} from './fruits-section/fruits-section.component';
import {FruitsStatisticsComponent} from './fruits-statistics/fruits-statistics.component';
import {FruitsService} from './fruits.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,
    FruitAddComponent,
    FruitsSectionComponent,
    FruitsStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FruitsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
