import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormNoComponent } from './dynamic-form-no.component';

describe('DynamicFormNoComponent', () => {
  let component: DynamicFormNoComponent;
  let fixture: ComponentFixture<DynamicFormNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
