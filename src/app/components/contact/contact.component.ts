import { Component, OnInit } from '@angular/core';
import { Icon } from 'src/app/models/icon';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public icon = Icon;

  constructor() { }

  ngOnInit(): void {
  }

}
