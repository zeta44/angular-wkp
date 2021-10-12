import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecPageComponent } from './direc-page.component';

describe('DirecPageComponent', () => {
  let component: DirecPageComponent;
  let fixture: ComponentFixture<DirecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
