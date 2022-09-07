import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMawladsComponent } from './recent-mawlads.component';

describe('RecentMawladsComponent', () => {
  let component: RecentMawladsComponent;
  let fixture: ComponentFixture<RecentMawladsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentMawladsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMawladsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
