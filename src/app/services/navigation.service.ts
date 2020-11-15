import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { ILang } from '../models/lang';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private availableLanguages = environment.languages;

  private scroll: BehaviorSubject<string>;
  public scroll$: Observable<string>;
  private isSideBarOpen: BehaviorSubject<boolean>;
  public isSideBarOpen$: Observable<boolean>;
  private currentLang: BehaviorSubject<ILang>;
  public currentLang$: Observable<ILang>;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private translateService: TranslateService) {
    this.initLang();
    this.scroll = new BehaviorSubject(null);
    this.scroll$ = this.scroll.asObservable();
    this.isSideBarOpen = new BehaviorSubject(false);
    this.isSideBarOpen$ = this.isSideBarOpen.asObservable();
  }

  public scrollTo(target: string): void {
    this.scroll.next(target);
  }

  public toggleSideBar(): void {
    this.isSideBarOpen$.pipe(first()).subscribe(isSideBarOpen => this.isSideBarOpen.next(!isSideBarOpen));
  }

  public onSwitchLang(langValue: string): void {
    const currentLang = this.availableLanguages.find(lang => lang.value === langValue);
    this.translateService.use(langValue);
    this.currentLang.next(currentLang);
  }

  private initLang(): void {
    let defaultLang: string;
    const langValues = this.availableLanguages.map(lang => lang.value);

    if (isPlatformBrowser(this.platformId)) {
      const browserLang = this.translateService.getBrowserLang().toLowerCase();
      defaultLang = langValues.includes(browserLang) ? browserLang : 'en';
      const currentLang = this.availableLanguages.find(lang => lang.value === defaultLang);
      this.currentLang = new BehaviorSubject(currentLang);
      this.currentLang$ = this.currentLang.asObservable();
      this.translateService.addLangs(langValues);
      this.translateService.setDefaultLang(defaultLang);
    }
  }

}
