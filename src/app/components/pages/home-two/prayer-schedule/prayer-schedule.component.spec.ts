import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerScheduleComponent } from './prayer-schedule.component';

describe('PrayerScheduleComponent', () => {
  let component: PrayerScheduleComponent;
  let fixture: ComponentFixture<PrayerScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
