import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SummerAssociateComponent } from './articles/summer-associate/summer-associate.component';
import { CommunicationsComponent } from './department/communications/communications.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'home/bank-on/summer-associate', component: SummerAssociateComponent },
  { path: 'home/marketing/communications', component: CommunicationsComponent },
  { path: 'home/projects', component: ProjectsComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
