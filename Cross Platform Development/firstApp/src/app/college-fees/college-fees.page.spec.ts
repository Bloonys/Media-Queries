import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollegeFeesPage } from './college-fees.page';

describe('CollegeFeesPage', () => {
  let component: CollegeFeesPage;
  let fixture: ComponentFixture<CollegeFeesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeFeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
