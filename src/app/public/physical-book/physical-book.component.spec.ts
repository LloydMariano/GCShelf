import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalBookComponent } from './physical-book.component';

describe('PhysicalBookComponent', () => {
  let component: PhysicalBookComponent;
  let fixture: ComponentFixture<PhysicalBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
