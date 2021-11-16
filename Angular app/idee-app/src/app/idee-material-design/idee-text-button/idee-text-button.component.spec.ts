import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeeTextButtonComponent } from './idee-text-button.component';

describe('IdeeTextButtonComponent', () => {
  let component: IdeeTextButtonComponent;
  let fixture: ComponentFixture<IdeeTextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeeTextButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeeTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
