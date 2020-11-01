import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ILang } from 'src/app/models/lang';
import { NavigationService } from 'src/app/services/navigation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  public currentLang$: Observable<ILang>;
  public availableLanguages = environment.languages;

  constructor(public navigationService: NavigationService) {
    this.currentLang$ = this.navigationService.currentLang$;
  }

  public onSwitchLang(langValue: string): void {
    this.navigationService.onSwitchLang(langValue);
  }

  public onScroll(target: string): void {
    this.navigationService.scrollTo(target);
  }

}
