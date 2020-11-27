import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSocialsComponent } from './contact-socials.component';

describe('ContactSocialsComponent', () => {
  let component: ContactSocialsComponent;
  let fixture: ComponentFixture<ContactSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
