import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { GlobalConfigService } from 'src/app/services/global-config.service';
import { Observable, Subscription } from 'rxjs';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  public imgUrl: string;
  public currentLang: { value: string, label: string };
  public availableLanguages = environment.languages;
  public currentTheme: Theme;
  public Theme = Theme;
  private subscription = new Subscription();

  constructor(private translateService: TranslateService, private globalConfigService: GlobalConfigService) {
    const browserLang = this.translateService.getBrowserLang().toLowerCase();
    const langValues = this.availableLanguages.map(lang => lang.value);
    const defaultLang = langValues.includes(browserLang) ? browserLang : 'en';
    this.currentLang = this.availableLanguages.find(lang => lang.value === defaultLang);
    this.translateService.addLangs(langValues);
    this.translateService.setDefaultLang(defaultLang);
    this.handleThemeChanges();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSwitchLang(langValue: string): void {
    this.translateService.use(langValue);
    this.currentLang = this.availableLanguages.find(lang => lang.value === langValue);
  }

  public onSwitchThem(): void {
    this.globalConfigService.switchTheme();
  }

  private handleThemeChanges(): void {
    const subscription = this.globalConfigService.theme$.subscribe(theme => {
      this.currentTheme = theme;
      this.imgUrl = theme === Theme.LIGHT ? '../../../assets/images/logo_transparent_background.png' : '../../../assets/images/white_logo_transparent_background.png';
    });
    this.subscription.add(subscription);
  }


}
