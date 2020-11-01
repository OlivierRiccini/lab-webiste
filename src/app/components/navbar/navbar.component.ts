import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { ILang } from 'src/app/models/lang';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('navbar') navbarElementView: ElementRef;
  public imgUrl: string;
  public currentLang$: Observable<ILang>;
  public hasScrolled = false;
  public isSideBarOpen$: Observable<boolean>;

  constructor(private navigationService: NavigationService) {
    this.isSideBarOpen$ = this.navigationService.isSideBarOpen$;
    this.currentLang$ = this.navigationService.currentLang$;
  }

  public onSwitchLang(langValue: string): void {
    this.navigationService.onSwitchLang(langValue);
  }

  public onScroll(target: string): void {
    this.navigationService.scrollTo(target);
  }

  public onToggleSideNav(): void {
    this.navigationService.toggleSideBar();
  }

  @HostListener('window:scroll', ['$event'])
  handOnScroll(event) {
    if (this.navbarElementView) {
      const breakPoint = this.navbarElementView.nativeElement.offsetHeight;
      this.hasScrolled = document.body.scrollTop > breakPoint || document.documentElement.scrollTop > breakPoint;
    }
  }

}
