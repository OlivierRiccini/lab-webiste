import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar.component';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent extends NavbarComponent implements OnInit {

  constructor(
    public translateService: TranslateService,
    public navigationService: NavigationService
  ) {
    super(translateService, navigationService);
  }

  ngOnInit(): void {
  }

}
