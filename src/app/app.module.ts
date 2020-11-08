import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { MainLayoutModule } from './components/main-layout/main-layout.module';
import { TourPageModule } from './components/main-layout/tour-page/tour-page.module';
import { ToursListPageModule } from './components/main-layout/tours-list-page/tours-list-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    MainLayoutModule,
    TourPageModule,
    ToursListPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
