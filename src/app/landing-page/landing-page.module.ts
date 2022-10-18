import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SharedComponentsModule } from './common/components/shared-components.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedComponentsModule,
  ],
})
export class LandingPageModule { }
