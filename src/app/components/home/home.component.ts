import { Component, OnInit, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
// import { DOCUMENT, isPlatformBrowser } from '@angular/common';
// import { PageScrollService } from 'ngx-page-scroll-core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // private subscription = new Subscription();
  // private pageScrollService: PageScrollService;

  constructor(
    // @Inject(DOCUMENT) private document: any,
    // @Inject(PLATFORM_ID) private platformId: any,
    private route: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationService
    ) {
      // if (isPlatformBrowser(this.platformId)) {
      //   // this.pageScrollService = new PageScrollService({scrollInView: true});
      //   // this.listenToScroll();
      // }
  }

  public ngOnInit(): void {
    if (this.route.snapshot.fragment) {
      console.log(this.route.snapshot.fragment);
      this.router.navigateByUrl('/');
      // const target = '#' + this.route.snapshot.fragment;
      // this.navigationService.scrollTo(target);
    }
  }

  // public ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  // private scrollTo(target: string): void {
  //   this.pageScrollService.scroll({
  //     document: this.document,
  //     scrollInView: true,
  //     scrollTarget: target,
  //     scrollOffset: 70
  //   });
  // }

  // private listenToScroll(): void {
  //   const subscription = this.navigationService.scroll$.subscribe(target => {
  //     if (target) {
  //       this.scrollTo(target);
  //     }
  //   });
  //   this.subscription.add(subscription);
  // }

}
