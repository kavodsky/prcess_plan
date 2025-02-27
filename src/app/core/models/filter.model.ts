export class FilterConfig {
  options: FilterOption[];
  label: string;
  key: string;

  constructor(label: string, options: [FilterOption], key: string) {
    this.label = label;
    this.options = options;
    this.key = key;
  }
}

export class FilterOption {
  value: string;
  label: string;

  constructor(value: string, label: string) {
    this.value = value;
    this.label = label;
  }
}
