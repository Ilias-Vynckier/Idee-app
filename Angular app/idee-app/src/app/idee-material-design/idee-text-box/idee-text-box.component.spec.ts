import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeeTextBoxComponent } from './idee-text-box.component';

describe('IdeeTextBoxComponent', () => {
  let component: IdeeTextBoxComponent;
  let fixture: ComponentFixture<IdeeTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeeTextBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeeTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
