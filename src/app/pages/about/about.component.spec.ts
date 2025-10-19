import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all industry advisors by default', () => {
    expect(component.selectedIndustryFilter).toBe('all');
    expect(component.filteredIndustryAdvisors.length).toBe(component.industryAdvisors.length);
  });

  it('should filter industry advisors by selected industry', () => {
    component.setIndustryFilter('金融業');
    fixture.detectChanges();

    expect(component.selectedIndustryFilter).toBe('金融業');
    expect(component.filteredIndustryAdvisors.length).toBeGreaterThan(0);
    expect(
      component.filteredIndustryAdvisors.every(
        (advisor) => advisor.industry === component.selectedIndustryFilter
      )
    ).toBeTrue();
  });
});
