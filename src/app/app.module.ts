import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CareersComponent } from './components/careers/careers.component';
import { HomeWorkComponent } from './components/home/home-work/home-work.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeServicesComponent } from './components/home/home-services/home-services.component';
import { ContactFormComponent } from './components/shared/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeContactComponent } from './components/home/home-contact/home-contact.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { TopNavComponent } from './components/navbar/top-nav/top-nav.component';
import { SideNavComponent } from './components/navbar/side-nav/side-nav.component';
import { HomeProcessComponent } from './components/home/home-about/home-process/home-process.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SvgLandingImgComponent } from './components/svg-landing-img/svg-landing-img.component';
import { HomeAboutComponent } from './components/home/home-about/home-about.component';
import { LoaderComponent } from './components/shared/loader/loader.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LandingComponent,
    CareersComponent,
    HomeWorkComponent,
    FooterComponent,
    HomeServicesComponent,
    ContactFormComponent,
    HomeContactComponent,
    TopNavComponent,
    SideNavComponent,
    HomeProcessComponent,
    SvgLandingImgComponent,
    HomeAboutComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollCoreModule.forRoot({scrollInView: true}),
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient, TransferState]
      }
    }),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [TransferState],
  bootstrap: [AppComponent]
})
export class AppModule { }
