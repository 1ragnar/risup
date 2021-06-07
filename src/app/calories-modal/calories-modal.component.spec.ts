import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesModalComponent } from './calories-modal.component';

describe('CaloriesModalComponent', () => {
  let component: CaloriesModalComponent;
  let fixture: ComponentFixture<CaloriesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloriesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
