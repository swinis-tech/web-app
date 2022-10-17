import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMalwadsComponent } from './upcoming-malwads.component';

describe('UpcomingMalwadsComponent', () => {
  let component: UpcomingMalwadsComponent;
  let fixture: ComponentFixture<UpcomingMalwadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingMalwadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingMalwadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
