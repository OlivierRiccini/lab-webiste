import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CareersComponent } from './components/careers/careers.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FragmentGuard } from './guards/fragment.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [FragmentGuard],
    component: HomeComponent,
    pathMatch: 'full',
    data: { title: 'Blockbrainers | Blockchain Consulting Company' }
  },
  {
    path: 'services',
    canActivate: [FragmentGuard],
    component: ServicesComponent,
    data: { title: 'Services | Blockbrainers' }
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
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Blockbrainers | Contact | Blockchain Consulting Company' }
  }
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
