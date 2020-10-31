import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  public onScroll(target: string): void {
    this.navigationService.scrollTo(target);
  }

}
