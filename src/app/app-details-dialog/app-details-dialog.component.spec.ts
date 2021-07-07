import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsDialogComponent } from './app-details-dialog.component';

describe('AppDetailsDialogComponent', () => {
  let component: AppDetailsDialogComponent;
  let fixture: ComponentFixture<AppDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
