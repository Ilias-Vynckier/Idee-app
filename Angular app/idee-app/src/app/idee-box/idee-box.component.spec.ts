import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeeBoxComponent } from './idee-box.component';

describe('IdeeBoxComponent', () => {
  let component: IdeeBoxComponent;
  let fixture: ComponentFixture<IdeeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
