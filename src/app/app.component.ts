import { Component, OnDestroy } from '@angular/core';import AOS from 'aos';
import { Theme } from './models/theme';
import { GlobalConfigService } from './services/global-config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Blockbrainers';
  public Theme = Theme;
  public currentTheme: Theme;
  private subscription = new Subscription();
  public topened = false;

  constructor(private globalConfigService: GlobalConfigService) {
    AOS.init({
      disable: 'mobile'
    });
    this.handleThemeChanges();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private handleThemeChanges(): void {
    const subscription = this.globalConfigService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
    this.subscription.add(subscription);
  }

}
