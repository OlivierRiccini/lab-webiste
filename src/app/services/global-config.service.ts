import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../models/theme';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  private theme: BehaviorSubject<Theme>;
  public theme$: Observable<Theme>;

  constructor() {
    this.theme = new BehaviorSubject(environment.defaultTheme);
    this.theme$ = this.theme.asObservable();
  }

  public switchTheme(): void {
    this.theme$.pipe(first()).subscribe(currentTheme => {
      this.theme.next(currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    });
  }

}
