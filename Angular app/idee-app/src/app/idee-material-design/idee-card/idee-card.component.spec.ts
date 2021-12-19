import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeeCardComponent } from './idee-card.component';

describe('IdeeCardComponent', () => {
  let component: IdeeCardComponent;
  let fixture: ComponentFixture<IdeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
