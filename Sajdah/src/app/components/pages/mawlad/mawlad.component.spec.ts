import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MawladComponent } from './mawlad.component';

describe('MawladComponent', () => {
  let component: MawladComponent;
  let fixture: ComponentFixture<MawladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MawladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MawladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
