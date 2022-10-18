import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './landing-page/common/services/data.service';
import { LandingPageModule } from './landing-page/landing-page.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
