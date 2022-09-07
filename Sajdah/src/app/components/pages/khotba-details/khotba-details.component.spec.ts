import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhotbaDetailsComponent } from './khotba-details.component';

describe('KhotbaDetailsComponent', () => {
  let component: KhotbaDetailsComponent;
  let fixture: ComponentFixture<KhotbaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhotbaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhotbaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
