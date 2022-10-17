import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhotbaComponent } from './khotba.component';

describe('KhotbaComponent', () => {
  let component: KhotbaComponent;
  let fixture: ComponentFixture<KhotbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhotbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhotbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
