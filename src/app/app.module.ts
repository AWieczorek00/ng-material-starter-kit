import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {PublicHolidaysServiceModule} from "./services/public-holidays.service-module";
import { RegisterServiceModule } from "./services/register.service-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PublicHolidaysServiceModule,
    RegisterServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
