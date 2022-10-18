import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderUserFromComponent } from './reader.component';

describe('ReaderComponent', () => {
  let component: ReaderUserFromComponent;
  let fixture: ComponentFixture<ReaderUserFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderUserFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderUserFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
