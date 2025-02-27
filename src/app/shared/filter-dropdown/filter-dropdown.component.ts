// src/app/shared/components/filter-dropdown/filter-dropdown.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterConfig, FilterOption } from '../../../core/models/filter.model';

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss']
})
export class FilterDropdownComponent {
  @Input() config!: FilterConfig;
  @Input() selectedValue: string = '';
  @Output() valueChanged = new EventEmitter<string>();
  
  isOpen = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: FilterOption): void {
    this.selectedValue = option.value;
    this.valueChanged.emit(option.value);
    this.isOpen = false;
  }
}