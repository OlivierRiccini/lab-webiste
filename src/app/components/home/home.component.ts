import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private route: ActivatedRoute,
    private navigationService: NavigationService
    ) {
      this.listenToScroll();
  }

  public ngOnInit(): void {
    if (this.route.snapshot.fragment) {
      const target = '#' + this.route.snapshot.fragment;
      this.scrollTo(target);
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private scrollTo(target: string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollInView: true,
      scrollTarget: target,
      // scrollOffset: 160
    });
  }

  private listenToScroll(): void {
    const subscription = this.navigationService.scroll$.subscribe(target => {
      setTimeout(() => {
        if (target) {
          this.scrollTo(target);
        }
      }, 100);
    });
    this.subscription.add(subscription);
  }

}
