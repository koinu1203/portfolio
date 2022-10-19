import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SharedComponentsModule } from './common/components/shared-components.module';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { AppRoutingModule } from '../app-routing.module';
import { ExperiencesComponent } from './experiences/experiences.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProyectsComponent,
    ExperiencesComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedComponentsModule,
    RouterModule
  ],
})
export class LandingPageModule { }
