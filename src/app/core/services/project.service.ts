import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project, ProjectStatus } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: '1',
      name: 'RORA NCE Agonist',
      status: ProjectStatus.PRELO,
      cmdr: true,
      nbe: true,
      tags: ['AB', 'MF', 'CC']
    },
    {
      id: '2',
      name: 'MARC1 GalNAc-siRNA',
      status: ProjectStatus.EXPLORATORY,
      cmdr: true,
      nce: true,
      tags: ['AB', 'MF', 'CC']
    },
    {
      id: '3',
      name: 'MARC1 Degrader',
      status: ProjectStatus.LO,
      cmdr: true,
      nce: true,
      tags: ['AB', 'MF', 'CC']
    },
    {
      id: '4',
      name: 'NASH',
      status: ProjectStatus.EXPLORATORY,
      category: 'Liver disease',
      nbe: true,
      tags: ['AB', 'MF', 'CC']
    }
  ];

  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);

  getProjects(): Observable<Project[]> {
    return this.projectsSubject.asObservable();
  }

  updateProjectStatus(projectId: string, newStatus: ProjectStatus): void {
    const updatedProjects = this.projects.map(project => 
      project.id === projectId ? { ...project, status: newStatus } : project
    );
    this.projects = updatedProjects;
    this.projectsSubject.next(updatedProjects);
  }

  terminateProject(projectId: string): void {
    const updatedProjects = this.projects.map(project => 
      project.id === projectId ? { ...project, status: ProjectStatus.TERMINATED, isActive: false } : project
    );
    this.projects = updatedProjects;
    this.projectsSubject.next(updatedProjects);
  }
}
