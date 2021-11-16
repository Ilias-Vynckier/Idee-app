import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeeToolbarComponent } from './idee-toolbar.component';

describe('IdeeToolbarComponent', () => {
  let component: IdeeToolbarComponent;
  let fixture: ComponentFixture<IdeeToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeeToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
