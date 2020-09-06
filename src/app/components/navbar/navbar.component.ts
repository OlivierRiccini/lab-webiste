import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { GlobalConfigService } from 'src/app/services/global-config.service';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/models/theme';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public imgUrl: string;
  public currentLang: { value: string, label: string };
  public availableLanguages = environment.languages;
  public theme$: Observable<Theme>;
  public Theme = Theme;
  public isSideBarOpen = false;

  constructor(
    public translateService: TranslateService,
    public globalConfigService: GlobalConfigService,
    public navigationService: NavigationService
    ) {
    const browserLang = this.translateService.getBrowserLang().toLowerCase();
    const langValues = this.availableLanguages.map(lang => lang.value);
    const defaultLang = langValues.includes(browserLang) ? browserLang : 'en';
    this.currentLang = this.availableLanguages.find(lang => lang.value === defaultLang);
    this.translateService.addLangs(langValues);
    this.translateService.setDefaultLang(defaultLang);
    this.theme$ = this.globalConfigService.theme$;
  }

  public onSwitchLang(langValue: string): void {
    this.translateService.use(langValue);
    this.currentLang = this.availableLanguages.find(lang => lang.value === langValue);
  }

  public onSwitchTheme(): void {
    this.globalConfigService.switchTheme();
  }

  public onScroll(target: string): void {
    this.navigationService.scrollTo(target);
  }

  public onToggleSideNav(): void {
    this.isSideBarOpen = !this.isSideBarOpen;
  }

}
