// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FilterDropdownComponent } from './shared/components/filter-dropdown/filter-dropdown.component';
import { HoverActionsDirective } from './shared/directives/hover-actions.directive';
import { ProjectCardComponent } from './features/project-dashboard/components/project-card/project-card.component';
import { ProjectDashboardComponent } from './features/project-dashboard/project-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilterDropdownComponent,
    HoverActionsDirective,
    ProjectCardComponent,
    ProjectDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }