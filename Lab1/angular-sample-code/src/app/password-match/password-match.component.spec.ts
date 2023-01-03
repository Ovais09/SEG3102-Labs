import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordMatchComponent } from './password-match.component';

describe('PasswordMatchComponent', () => {
  let component: PasswordMatchComponent;
  let fixture: ComponentFixture<PasswordMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
