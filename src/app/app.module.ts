import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { MainLayoutModule } from './components/main-layout/main-layout.module';
import { TourPageModule } from './components/main-layout/tour-page/tour-page.module';
import { ToursListPageModule } from './components/main-layout/tours-list-page/tours-list-page.module';
import { NotFoundPageModule } from './components/main-layout/not-found-page/not-found-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    MainLayoutModule,
    TourPageModule,
    ToursListPageModule,
    NotFoundPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
