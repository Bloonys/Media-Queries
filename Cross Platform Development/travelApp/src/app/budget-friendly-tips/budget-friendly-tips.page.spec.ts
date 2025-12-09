import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetFriendlyTipsPage } from './budget-friendly-tips.page';

describe('BudgetFriendlyTipsPage', () => {
  let component: BudgetFriendlyTipsPage;
  let fixture: ComponentFixture<BudgetFriendlyTipsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetFriendlyTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
