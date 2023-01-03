import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementComponent } from './form-element.component';

describe('FormElementComponent', () => {
  let component: FormElementComponent;
  let fixture: ComponentFixture<FormElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
