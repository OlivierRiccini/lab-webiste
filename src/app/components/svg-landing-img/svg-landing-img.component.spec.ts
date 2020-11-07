import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLandingImgComponent } from './svg-landing-img.component';

describe('SvgLandingImgComponent', () => {
  let component: SvgLandingImgComponent;
  let fixture: ComponentFixture<SvgLandingImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgLandingImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgLandingImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
