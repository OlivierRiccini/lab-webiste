import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent implements OnInit {
  public contactEmail = environment.contactEmail;
  public faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
