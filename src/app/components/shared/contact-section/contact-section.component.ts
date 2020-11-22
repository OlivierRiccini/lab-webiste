import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  @Input() public backgroudColor: string;
  @Input() public title: string;
  public defaultTitle = 'GET IN TOUCH';

  constructor() { }

  ngOnInit(): void {
  }

}
