import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue:boolean = true;

  public loadingData: string[] = [
    'value1',
    'value2',
    'value3'
  ]

  public nomes: Array<{nome: string}> = [];

  public condition: string = 'C';

  public trackByFunction (index:number) {
    return index;
  }

  public adicionarNomes(value: string) {
    this.nomes.push({nome: value});
  }

}
