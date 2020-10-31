import { Component, OnInit, Input } from '@angular/core';
import { NavbarComponent } from '../navbar.component';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent extends NavbarComponent implements OnInit {
  @Input() public open: boolean;
  public theme$: Observable<Theme>;

  constructor(
    public translateService: TranslateService,
    public navigationService: NavigationService
  ) {
    super(translateService, navigationService);
  }

  ngOnInit(): void {
  }

}
