import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMalwadsComponent } from './recent-malwads.component';

describe('RecentMalwadsComponent', () => {
  let component: RecentMalwadsComponent;
  let fixture: ComponentFixture<RecentMalwadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentMalwadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMalwadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
