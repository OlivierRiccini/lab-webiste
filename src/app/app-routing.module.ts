import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CareersComponent } from './components/careers/careers.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FragmentGuard } from './guards/fragment.guard';

const routes: Routes = [
  { path: '', canActivate: [FragmentGuard], component: HomeComponent, pathMatch: 'full' },
  { path: 'services', canActivate: [FragmentGuard], component: ServicesComponent },
  { path: 'about', canActivate: [FragmentGuard], component: AboutComponent },
  { path: 'careers', canActivate: [FragmentGuard], component: CareersComponent },
  { path: 'contact', component: ContactComponent }
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
