import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerStylesComponent } from './prayer-styles.component';

describe('PrayerStylesComponent', () => {
  let component: PrayerStylesComponent;
  let fixture: ComponentFixture<PrayerStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
