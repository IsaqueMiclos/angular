import { Component, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayDeProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/calculator.svg",
      alt: "Projeto calculadora",
      title: "Calculadora",
      width: "100px",
      height: "51px",
      description: "Calculadora feita em Js, HTML e CSS",
      links: [
        {
          name: "github",
          href: "#",
        },
      ],
    },
    {
      src: "assets/img/projects/lista-de-tarefas.svg",
      alt: "Projeto Lista de tarefas",
      title: "Lista de tarefas",
      width: "100px",
      height: "51px",
      description: "Lista de tarefas feita em Js, HTML e CSS",
      links: [
        {
          name: "github",
          href: "#",
        },
      ],
    }
  ])
}
