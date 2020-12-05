import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import AOS from 'aos';

import * as ImagePreloader from 'image-preloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Blockbrainers';
  public isBrowser = false;
  public topened = false;
  private preloader = new ImagePreloader();

  constructor(@Inject(PLATFORM_ID) private platformId: any, private router: Router) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      AOS.init({
        disable: 'mobile'
      });
    }
    this.preloader.preload('./assets/images/about/team.jpg')
      .then((status) => {
          console.log('all done!', status);
      });

  }

  public ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          (window as any).gtag('set', 'page', event.urlAfterRedirects);
          (window as any).gtag('send', 'pageview');
        }
      });
    }
  }

}
