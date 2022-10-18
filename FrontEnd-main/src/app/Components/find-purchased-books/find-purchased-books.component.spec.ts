import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPurchasedBooksComponent } from './find-purchased-books.component';

describe('FindPurchasedBooksComponent', () => {
  let component: FindPurchasedBooksComponent;
  let fixture: ComponentFixture<FindPurchasedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPurchasedBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindPurchasedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
