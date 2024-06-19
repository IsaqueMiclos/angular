import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
 export class TemplateVariablesComponent  {
  // @viewChild('name') public nameInput!: ElementRef;
  // @viewChild('h2') public h2Input!: ElementRef;

  // ngAfterViewInit(): void {
  //     console.log(this.nameInput);
  //     console.log(this.h2Input);
  // }


}
