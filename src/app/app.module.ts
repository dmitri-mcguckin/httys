import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillTreeComponent } from './skill-tree/skill-tree.component';
import { HomeComponent } from './home/home.component';
import { InfoHotbarComponent } from './info-hotbar/info-hotbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SkillTreeComponent,
    HomeComponent,
    InfoHotbarComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [
    AppComponent,
    SkillTreeComponent,
    HomeComponent,
    InfoHotbarComponent,
  ],
})
export class AppModule {}
