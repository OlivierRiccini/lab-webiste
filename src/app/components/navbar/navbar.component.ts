import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/models/theme';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('navbar') navbarElementView: ElementRef;
  public imgUrl: string;
  public currentLang: { value: string, label: string };
  public availableLanguages = environment.languages;
  public theme$: Observable<Theme>;
  public Theme = Theme;
  public isSideBarOpen = false;
  public hasScrolled = false;

  constructor(
    public translateService: TranslateService,
    public navigationService: NavigationService
    ) {
    const browserLang = this.translateService.getBrowserLang().toLowerCase();
    const langValues = this.availableLanguages.map(lang => lang.value);
    const defaultLang = langValues.includes(browserLang) ? browserLang : 'en';
    this.currentLang = this.availableLanguages.find(lang => lang.value === defaultLang);
    this.translateService.addLangs(langValues);
    this.translateService.setDefaultLang(defaultLang);
  }

  public onSwitchLang(langValue: string): void {
    this.translateService.use(langValue);
    this.currentLang = this.availableLanguages.find(lang => lang.value === langValue);
  }

  public onScroll(target: string): void {
    this.navigationService.scrollTo(target);
  }

  public onToggleSideNav(): void {
    this.isSideBarOpen = !this.isSideBarOpen;
  }

  @HostListener('window:scroll', ['$event'])
  handleKeyDown(event) {
    if (this.navbarElementView) {
      const breakPoint = this.navbarElementView.nativeElement.offsetHeight;
      this.hasScrolled = document.body.scrollTop > breakPoint || document.documentElement.scrollTop > breakPoint;
    }
  }

}
