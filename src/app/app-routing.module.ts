import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CareersComponent } from './components/careers/careers.component';
import { AboutComponent } from './components/about/about.component';
import { FragmentGuard } from './guards/fragment.guard';
import { DevelopmentComponent } from './components/development/development.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { InfrastructureComponent } from './components/infrastructure/infrastructure.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [FragmentGuard],
    component: HomeComponent,
    pathMatch: 'full',
    data: { title: 'Blockbrainers | Blockchain Consulting Company' }
  },
  {
    path: 'development',
    canActivate: [FragmentGuard],
    component: DevelopmentComponent,
    data: { title: 'Development | Blockbrainers' }
  },
  {
    path: 'investments',
    component: InvestmentsComponent,
    data: { title: 'Blockbrainers | Investments' }
  },
  {
    path: 'infrastructure',
    component: InfrastructureComponent,
    data: { title: 'Blockbrainers | Infrastructure' }
  },
  {
    path: 'about',
    canActivate: [FragmentGuard],
    component: AboutComponent,
    data: { title: 'About | Blockbrainers' }
  },
  {
    path: 'careers',
    canActivate: [FragmentGuard],
    component: CareersComponent,
    data: { title: 'Careers | Blockbrainers' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
