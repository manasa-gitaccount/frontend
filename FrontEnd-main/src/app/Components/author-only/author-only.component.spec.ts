import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorOnlyComponent } from './author-only.component';

describe('AuthorOnlyComponent', () => {
  let component: AuthorOnlyComponent;
  let fixture: ComponentFixture<AuthorOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorOnlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
