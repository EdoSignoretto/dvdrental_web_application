import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentModalComponent } from './rent-modal.component';

describe('RentModalComponent', () => {
  let component: RentModalComponent;
  let fixture: ComponentFixture<RentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentModalComponent]
    });
    fixture = TestBed.createComponent(RentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
