import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveElementComponent } from './remove-element.component';

describe('RemoveElementComponent', () => {
  let component: RemoveElementComponent;
  let fixture: ComponentFixture<RemoveElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
