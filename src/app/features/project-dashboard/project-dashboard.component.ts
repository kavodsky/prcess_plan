// src/app/features/project-dashboard/project-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Project, ProjectStatus } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';
import { FilterConfig } from '../../core/models/filter.model';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  
  labelFilter: FilterConfig = {
    label: 'Label',
    key: 'label',
    options: [
      { value: 'all', label: 'All' },
      { value: 'cmdr', label: 'CMDR' },
      { value: 'nce', label: 'NCE' },
      { value: 'nbe', label: 'NBE' }
    ]
  };
  
  phaseFilter: FilterConfig = {
    label: 'Research phase',
    key: 'phase',
    options: [
      { value: 'all', label: 'All' },
      { value: 'prelo', label: 'PreLO' },
      { value: 'lo', label: 'LO' },
      { value: 'exploratory', label: 'Exploratory' }
    ]
  };
  
  selectedLabel = 'all';
  selectedPhase = 'all';
  
  constructor(private projectService: ProjectService) {}
  
  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.applyFilters();
    });
  }
  
  onLabelFilterChange(value: string): void {
    this.selectedLabel = value;
    this.applyFilters();
  }
  
  onPhaseFilterChange(value: string): void {
    this.selectedPhase = value;
    this.applyFilters();
  }
  
  applyFilters(): void {
    this.filteredProjects = this.projects.filter(project => {
      // Label filter
      const labelMatch = this.selectedLabel === 'all' || 
        (this.selectedLabel === 'cmdr' && project.cmdr) ||
        (this.selectedLabel === 'nce' && project.nce) ||
        (this.selectedLabel === 'nbe' && project.nbe);
      
      // Phase filter
      const phaseMatch = this.selectedPhase === 'all' ||
        (this.selectedPhase === 'prelo' && project.status === ProjectStatus.PRELO) ||
        (this.selectedPhase === 'lo' && project.status === ProjectStatus.LO) ||
        (this.selectedPhase === 'exploratory' && project.status === ProjectStatus.EXPLORATORY);
      
      return labelMatch && phaseMatch;
    });
  }
  
  onEditProject(projectId: string): void {
    console.log('Edit project:', projectId);
    // Navigate to edit project page or open modal
  }
  
  onMoveToPreLO(projectId: string): void {
    this.projectService.updateProjectStatus(projectId, ProjectStatus.PRELO);
  }
  
  onTerminateProject(projectId: string): void {
    this.projectService.terminateProject(projectId);
  }
}