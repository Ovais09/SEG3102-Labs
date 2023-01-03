import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormBuilderComponent } from './reactive-form-builder.component';

describe('ReactiveFormBuilderComponent', () => {
  let component: ReactiveFormBuilderComponent;
  let fixture: ComponentFixture<ReactiveFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
