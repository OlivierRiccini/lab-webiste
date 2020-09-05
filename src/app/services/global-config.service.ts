import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../models/theme';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { DeviceWidth } from '../models/deviceWidth';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  private theme: BehaviorSubject<Theme>;
  public theme$: Observable<Theme>;
  private deviceWidth: BehaviorSubject<DeviceWidth>;
  public deviceWidth$: Observable<DeviceWidth>;

  constructor() {
    this.theme = new BehaviorSubject(environment.defaultTheme);
    this.theme$ = this.theme.asObservable();
    this.deviceWidth = new BehaviorSubject(null);
    this.deviceWidth$ = this.deviceWidth.asObservable();
  }

  public switchTheme(): void {
    this.theme$.pipe(first()).subscribe(currentTheme => {
      this.theme.next(currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    });
  }

  public swicthDeviceWidth(width: DeviceWidth): void {
    this.deviceWidth.next(width);
    console.log('WIDTH ', width);
  }

}
