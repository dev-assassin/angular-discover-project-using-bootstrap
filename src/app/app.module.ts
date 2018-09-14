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
import { CommunicationsComponent } from './department/communications/communications.component';
import { ProjectsComponent } from './projects/projects.component';
import { DepositComponent } from './department/deposit/deposit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    SummerAssociateComponent,
    CommunicationsComponent,
    ProjectsComponent,
    DepositComponent
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
