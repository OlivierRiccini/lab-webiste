import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'fr']);
    this.translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  public onSwitchLang(lang: string) {
    this.translateService.use(lang);
  }

}
