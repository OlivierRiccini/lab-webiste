import { BrowserModule, Title, TransferState } from '@angular/platform-browser';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { TopNavComponent } from './components/navbar/top-nav/top-nav.component';
import { SideNavComponent } from './components/navbar/side-nav/side-nav.component';
import { HomeProcessComponent } from './components/home/home-about/home-process/home-process.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SvgLandingImgComponent } from './components/svg-landing-img/svg-landing-img.component';
import { HomeAboutComponent } from './components/home/home-about/home-about.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/shared/contact-form/contact-form.component';
import { ContactSocialsComponent } from './components/shared/contact-socials/contact-socials.component';
import { ContactSectionComponent } from './components/shared/contact-section/contact-section.component';
import { HomeBlogComponent } from './components/home/home-blog/home-blog.component';
import { QuoteComponent } from './components/shared/quote/quote.component';
import { UrlFormatPipe } from './pipes/url-format.pipe';
import { ServiceNameResolve } from './resolvers/service-name.resolver';
import { DevelopmentComponent } from './components/development/development.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { InfrastructureComponent } from './components/infrastructure/infrastructure.component';

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
    ContactSectionComponent,
    TopNavComponent,
    SideNavComponent,
    HomeProcessComponent,
    SvgLandingImgComponent,
    HomeAboutComponent,
    LoaderComponent,
    AboutComponent,
    ContactComponent,
    ContactSocialsComponent,
    HomeBlogComponent,
    QuoteComponent,
    UrlFormatPipe,
    DevelopmentComponent,
    InvestmentsComponent,
    InfrastructureComponent
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
  providers: [
    TransferState, 
    Title,
    ServiceNameResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
