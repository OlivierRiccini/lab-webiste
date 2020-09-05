import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar.component';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConfigService } from 'src/app/services/global-config.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent extends NavbarComponent implements OnInit {
  public open = false;

  constructor(
    public translateService: TranslateService,
    public globalConfigService: GlobalConfigService,
    public navigationService: NavigationService
  ) {
    super(translateService, globalConfigService, navigationService);
  }


  ngOnInit(): void {
  }

  public onToggleSideNav(): void {
    this.open = !this.open;
  }

}
