import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { FooterComponent } from './footer/footer.component';
import { SummerAssociateComponent } from './articles/summer-associate/summer-associate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    SummerAssociateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
