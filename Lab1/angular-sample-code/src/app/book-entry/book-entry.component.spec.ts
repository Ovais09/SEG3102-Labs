import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEntryComponent } from './book-entry.component';

describe('BookEntryComponent', () => {
  let component: BookEntryComponent;
  let fixture: ComponentFixture<BookEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
