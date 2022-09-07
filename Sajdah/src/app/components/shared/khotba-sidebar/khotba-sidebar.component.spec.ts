import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhotbaSidebarComponent } from './khotba-sidebar.component';

describe('KhotbaSidebarComponent', () => {
  let component: KhotbaSidebarComponent;
  let fixture: ComponentFixture<KhotbaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhotbaSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhotbaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
