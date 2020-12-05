import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public logos = [
    'ethereum-1.svg',
    'solidity.svg',
    'eos-3.svg',
    'hyperledger-icon.svg',
    'ganache-cli-icon.svg',
    'nodejs-icon.svg',
    'aws-2.svg',
    'angular-icon.svg',
    'react.svg',
    'ios.svg',
    'android.svg',
    'c.svg',
    'python-5.svg',
    'logo-javascript.svg',
    'golang-gopher.svg',
    'typescript.svg'
  ];

  public processSteps = ['idea', 'analysis', 'planning', 'MVP', 'fullImplementation', 'maintenance'];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  public onScroll(target: string): void {
    this.navigationService.scrollTo(target);
  }

}
