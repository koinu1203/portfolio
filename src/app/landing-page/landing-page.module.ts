import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
  ],
})
export class LandingPageModule { }
