import { Component, OnInit, Inject } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private route: ActivatedRoute,
    private navigationService: NavigationService
    ) {
      this.navigationService.scroll$.subscribe(target => {
        setTimeout(() => {
          if (target) {
            this.scrollTo(target);
          }
        //   this.pageScrollService.scroll({
        //     document: this.document,
        //     scrollInView: true,
        //     scrollTarget: target
        //   });
        }, 100);
      });
      // this.route.fragment.subscribe(fragment => {
      //   const target = '#' + fragment;
      //   // console.log(target);
      //   setTimeout(() => {
      //     this.pageScrollService.scroll({
      //       document: this.document,
      //       scrollInView: true,
      //       scrollTarget: target
      //     });
      //   }, 100);
      // });
  }

  ngOnInit(): void {
    if (this.route.snapshot.fragment) {
      const target = '#' + this.route.snapshot.fragment;
      this.scrollTo(target);
    }
    // console.log(this.route.snapshot.fragment);
  }

  private scrollTo(target: string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollInView: true,
      scrollTarget: target
    });
  }

}
