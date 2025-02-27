export enum ProjectStatus {
    PRELO = 'PreLO',
    LO = 'LO',
    EXPLORATORY = 'Exploratory',
    TERMINATED = 'Terminated'
  }
  
  export interface Project {
    id: string;
    name: string;
    description?: string;
    status: ProjectStatus;
    cmdr?: boolean;
    nce?: boolean;
    nbe?: boolean;
    category?: string;
    tags?: string[];
    isActive?: boolean;
  }
  
  // src/app/core/models/filter.model.ts
  export interface FilterOption {
    value: string;
    label: string;
  }
  
  export interface FilterConfig {
    label: string;
    key: string;
    options: FilterOption[];
  }