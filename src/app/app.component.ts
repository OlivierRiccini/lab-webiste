import { Component } from '@angular/core';import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blockbrainers';
  public topened = false;

  constructor() {
    AOS.init({
      disable: 'mobile'
    });
  }

}
