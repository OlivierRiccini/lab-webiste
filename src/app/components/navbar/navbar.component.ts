import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public currentLang: { value: string, label: string };
  public availableLanguages = environment.languages;

  constructor(private translateService: TranslateService) {
    const browserLang = this.translateService.getBrowserLang().toLowerCase();
    const langValues = this.availableLanguages.map(lang => lang.value);
    const defaultLang = langValues.includes(browserLang) ? browserLang : 'en';
    this.currentLang = this.availableLanguages.find(lang => lang.value === defaultLang);
    this.translateService.addLangs(langValues);
    this.translateService.setDefaultLang(defaultLang);
  }

  public onSwitchLang(langValue: string) {
    this.translateService.use(langValue);
    this.currentLang = this.availableLanguages.find(lang => lang.value === langValue);
  }


}
