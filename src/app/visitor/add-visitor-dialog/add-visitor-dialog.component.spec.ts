import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitorDialogComponent } from './add-visitor-dialog.component';

describe('AddVisitorDialogComponent', () => {
  let component: AddVisitorDialogComponent;
  let fixture: ComponentFixture<AddVisitorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
