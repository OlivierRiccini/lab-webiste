import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { ActivatedRoute } from '@angular/router';
import { GlobalConfigService } from 'src/app/services/global-config.service';
import { Observable, Subscription } from 'rxjs';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public theme$: Observable<Theme>;
  private subscription = new Subscription();

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private globalConfigService: GlobalConfigService
    ) {
      this.listenToScroll();
      this.theme$ = this.globalConfigService.theme$;
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
      scrollTarget: target
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

  // private handleThemeChanges(): void {
  //   const subscription = this.globalConfigService.theme$.subscribe(theme => {
  //     this.theme = theme;
  //   });
  //   this.subscription.add(subscription);
  // }

}
