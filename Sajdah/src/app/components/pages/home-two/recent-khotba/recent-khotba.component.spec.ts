import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentKhotbaComponent } from './recent-khotba.component';

describe('RecentKhotbaComponent', () => {
  let component: RecentKhotbaComponent;
  let fixture: ComponentFixture<RecentKhotbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentKhotbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentKhotbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
