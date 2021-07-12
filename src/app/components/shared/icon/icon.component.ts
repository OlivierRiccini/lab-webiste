import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/models/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  public iconType = Icon;
  @Input() public icon: Icon;
  @Input() public color: string;


  constructor() { }

  ngOnInit(): void {
  }

}
