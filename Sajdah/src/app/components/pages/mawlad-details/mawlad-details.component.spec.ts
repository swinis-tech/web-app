import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MawladDetailsComponent } from './mawlad-details.component';

describe('MawladDetailsComponent', () => {
  let component: MawladDetailsComponent;
  let fixture: ComponentFixture<MawladDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MawladDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MawladDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
