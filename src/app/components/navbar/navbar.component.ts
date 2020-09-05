import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { GlobalConfigService } from 'src/app/services/global-config.service';
import { Observable, Subscription } from 'rxjs';
import { Theme } from 'src/app/models/theme';
import { NavigationService } from 'src/app/services/navigation.service';
import { DeviceWidth } from 'src/app/models/deviceWidth';

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
  public currentWidth: DeviceWidth;
  public DeviceWidth = DeviceWidth;
  private subscription = new Subscription();

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
    this.handleThemeChanges();
    this.handleWindowWidthChanges();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  private handleThemeChanges(): void {
    const subscription = this.globalConfigService.theme$.subscribe(theme => {
      this.currentTheme = theme;
      // if (this.currentTheme) {
        this.defineLogo();
      // }
    });
    // white_logo_transparent_background-only-icon
    this.subscription.add(subscription);
  }

  private handleWindowWidthChanges(): void {
    const subscription = this.globalConfigService.deviceWidth$.subscribe(width => {
      this.currentWidth = width;
      // if (this.currentWidth || this.currentWidth === 0) {
        this.defineLogo();
      // }
    });
    this.subscription.add(subscription);
  }

  private defineLogo(): void {
    console.log('CHANGE W ', this.currentWidth);
    if (this.currentWidth === DeviceWidth.xs) {
      if (this.currentTheme === Theme.LIGHT) {
        this.imgUrl = '../../../assets/images/logo_transparent_background-only-icon.png';
      } else {
        this.imgUrl = '../../../assets/images/white_logo_transparent_background-only-icon.png';
      }
    } else {
      if (this.currentTheme === Theme.LIGHT) {
        this.imgUrl = '../../../assets/images/logo_transparent_background.png';
      } else {
        this.imgUrl = '../../../assets/images/white_logo_transparent_background.png';
      }
    }
    console.log('CHANGE ', this.imgUrl);
  }


}
