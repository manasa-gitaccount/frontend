import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByPaymentComponent } from './books-by-payment.component';

describe('BooksByPaymentComponent', () => {
  let component: BooksByPaymentComponent;
  let fixture: ComponentFixture<BooksByPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksByPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksByPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
