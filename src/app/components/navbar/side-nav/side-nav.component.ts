import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';
import { ILang } from 'src/app/models/lang';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  public isSideBarOpen$: Observable<boolean>;
  public currentLang$: Observable<ILang>;
  public availableLanguages = environment.languages;

  constructor(private navigationService: NavigationService) {
    this.isSideBarOpen$ = this.navigationService.isSideBarOpen$;
    this.currentLang$ = this.navigationService.currentLang$;
  }

  public onSwitchLang(langValue: string): void {
    this.navigationService.onSwitchLang(langValue);
  }

  public onToggleSideNav(): void {
    this.navigationService.toggleSideBar();
  }

}
