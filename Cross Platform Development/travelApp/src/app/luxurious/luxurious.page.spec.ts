import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LuxuriousPage } from './luxurious.page';

describe('LuxuriousPage', () => {
  let component: LuxuriousPage;
  let fixture: ComponentFixture<LuxuriousPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuriousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
