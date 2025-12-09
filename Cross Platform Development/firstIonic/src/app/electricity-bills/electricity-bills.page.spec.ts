import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectricityBillsPage } from './electricity-bills.page';

describe('ElectricityBillsPage', () => {
  let component: ElectricityBillsPage;
  let fixture: ComponentFixture<ElectricityBillsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
