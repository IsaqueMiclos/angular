import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponentsComponent } from './components/template/template-binding-components/template-binding-components.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from './components/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewComponent,TemplateBindingComponentsComponent,TemplateVariablesComponent,TemplateControlFlowComponent,TemplateDeferrableViewsComponent,SignalsComponent],
  template: `
  <!--<router-outlet />-->
    <h1>Curso de Angular</h1>
    <!--<app-new-component />-->
    <!--<app-template-binding-components />-->
    <!--<app-template-variables />-->
    <!--<app-template-control-flow />-->
    <!--<app-template-deferrable-views />-->
    <app-signals />
    `,
})
export class AppComponent {}
