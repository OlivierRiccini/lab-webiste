import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeServicesComponent } from './home-services.component';

describe('HomeServicesComponent', () => {
  let component: HomeServicesComponent;
  let fixture: ComponentFixture<HomeServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
