import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiResourcesComponent } from './ai-resources.component';

describe('AiResourcesComponent', () => {
  let component: AiResourcesComponent;
  let fixture: ComponentFixture<AiResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
