import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-socials',
  templateUrl: './contact-socials.component.html',
  styleUrls: ['./contact-socials.component.scss']
})
export class ContactSocialsComponent implements OnInit {
  @Input() public position: 'left' | 'right';

  public contactEmail = environment.contactEmail;
  public faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
