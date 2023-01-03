import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleExampleComponent } from './ngstyle-example.component';

describe('NgstyleExampleComponent', () => {
  let component: NgstyleExampleComponent;
  let fixture: ComponentFixture<NgstyleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstyleExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
