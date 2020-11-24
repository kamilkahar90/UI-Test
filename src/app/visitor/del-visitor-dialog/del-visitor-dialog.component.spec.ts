import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelVisitorDialogComponent } from './del-visitor-dialog.component';

describe('DelVisitorDialogComponent', () => {
  let component: DelVisitorDialogComponent;
  let fixture: ComponentFixture<DelVisitorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelVisitorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelVisitorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
