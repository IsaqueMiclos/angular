import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding-components',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-binding-components.component.html',
  styleUrl: './template-binding-components.component.scss'
})
export class TemplateBindingComponentsComponent {
  public name: string = "Hello World!";
  public age: number = 18;
  private message: string = "Jesus é bom!";

  public isDisabled = true;

  public sizeOfFont = "18px";

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }

  public getMessage(): string {
    return this.message;
  }
}
