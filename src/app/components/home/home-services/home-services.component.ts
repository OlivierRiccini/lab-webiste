import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements OnInit {
  public services = ['dapp', 'smartcontracts', 'crytpowallets', 'tokens', 'consulting', 'integration', 'training'];

  constructor() { }

  ngOnInit(): void {
  }

}
