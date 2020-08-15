import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillTreeComponent } from 'src/app/components/skill-tree/skill-tree.component';
import { InfoHotbarComponent } from 'src/app/components/info-hotbar/info-hotbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AttackPane } from './components/attacks/attacks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContractsComponent } from './components/contracts/contracts.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillTreeComponent,
    InfoHotbarComponent,
    AttackPane,
    ContractsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    SkillTreeComponent,
    InfoHotbarComponent,
  ],
})

export class AppModule {}
