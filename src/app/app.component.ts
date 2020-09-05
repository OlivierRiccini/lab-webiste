import { Component, OnDestroy, HostListener } from '@angular/core';import AOS from 'aos';
import { Theme } from './models/theme';
import { GlobalConfigService } from './services/global-config.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeviceWidth } from './models/deviceWidth';

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
  private currentDeviceWidth: DeviceWidth;

  constructor(private globalConfigService: GlobalConfigService) {
    AOS.init();
    this.handleThemeChanges();
    this.handleDeviceWidth(window.innerWidth);
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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleDeviceWidth(event.target.innerWidth);
  }

  private handleDeviceWidth(width: number): void {
    if (width <= environment.widthBreakpoints.xs && this.currentDeviceWidth !== DeviceWidth.xs) {
      this.currentDeviceWidth = DeviceWidth.xs;
      this.globalConfigService.swicthDeviceWidth(this.currentDeviceWidth);
      return;
    }

    if (width > environment.widthBreakpoints.xs && width <= environment.widthBreakpoints.s && this.currentDeviceWidth !== DeviceWidth.s) {
      this.currentDeviceWidth = DeviceWidth.s;
      this.globalConfigService.swicthDeviceWidth(this.currentDeviceWidth);
      return;
    }

    if (width > environment.widthBreakpoints.s && width <= environment.widthBreakpoints.m && this.currentDeviceWidth !== DeviceWidth.m) {
      this.currentDeviceWidth = DeviceWidth.m;
      this.globalConfigService.swicthDeviceWidth(this.currentDeviceWidth);
      return;
    }

    if (width > environment.widthBreakpoints.m  && this.currentDeviceWidth !== DeviceWidth.l) {
      this.currentDeviceWidth = DeviceWidth.l;
      this.globalConfigService.swicthDeviceWidth(this.currentDeviceWidth);
      return;
    }

  }

}
