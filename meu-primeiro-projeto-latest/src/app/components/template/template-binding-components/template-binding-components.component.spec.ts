import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBindingComponentsComponent } from './template-binding-components.component';

describe('TemplateBindingComponentsComponent', () => {
  let component: TemplateBindingComponentsComponent;
  let fixture: ComponentFixture<TemplateBindingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateBindingComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateBindingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
