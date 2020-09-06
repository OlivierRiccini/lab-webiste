import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Input() public theme: Theme;
  public Theme = Theme;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  public onScroll(target: string): void {
    this.navigationService.scrollTo(target);
  }

}
