import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdeeComponent } from './new-idee.component';

describe('NewIdeeComponent', () => {
  let component: NewIdeeComponent;
  let fixture: ComponentFixture<NewIdeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIdeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
