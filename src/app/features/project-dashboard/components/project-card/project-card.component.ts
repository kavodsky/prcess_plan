import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project, ProjectStatus } from '../../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Output() editProject = new EventEmitter<string>();
  @Output() moveToPreLO = new EventEmitter<string>();
  @Output() terminateProject = new EventEmitter<string>();
  
  showActions = false;

  onEdit(): void {
    this.editProject.emit(this.project.id);
  }

  onMoveToPreLO(): void {
    this.moveToPreLO.emit(this.project.id);
  }

  onTerminate(): void {
    this.terminateProject.emit(this.project.id);
  }
}