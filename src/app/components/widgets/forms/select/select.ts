import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { TranslateModule } from '@ngx-translate/core';
import { isObservable } from 'rxjs';

@Component({
  selector: 'app-select',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select extends FieldType<FieldTypeConfig> implements OnInit {
  dropdownOpen = false;
  newOptionLabel = '';

  selected: any[] = [];
  newOptions: any[] = [];
  ngOnInit() {
    this.newOptions = Array.isArray(this.props.options)
      ? this.props.options
      : [];
    this.updateSelectedFromValue();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  updateSelectedFromValue() {
    const val = this.formControl.value;
    if (Array.isArray(val) && Array.isArray(this.newOptions)) {
      this.selected = this.newOptions!.filter((opt) => val.includes(opt.value));
    } else {
      this.selected = [];
    }
  }

  isSelected(option: any): boolean {
    return this.selected.some((s) => s.value === option.value);
  }

  onOptionToggle(option: any) {
    if (this.isSelected(option)) {
      this.selected = this.selected.filter((s) => s.value !== option.value);
    } else {
      this.selected = [...this.selected, option];
    }
    this.emitSelected();
  }

  addNewOption() {
    const trimmed = this.newOptionLabel.trim();
    if (!trimmed) return;
    if (Array.isArray(this.newOptions)) {
      const exists = this.newOptions.some(
        (opt) => opt.label.toLowerCase() === trimmed.toLowerCase()
      );
      if (!exists) {
        const newOption = { label: trimmed, value: trimmed };
        this.newOptions = [...this.newOptions, newOption];
        this.selected = [...this.selected, newOption];
        this.emitSelected();
      }
      this.newOptionLabel = '';
    }
  }

  removeSelected(option: any) {
    this.selected = this.selected.filter((s) => s.value !== option.value);
    this.emitSelected();
  }

  private emitSelected() {
    const values = this.selected.map((opt) => opt.value);
    this.formControl.setValue(values);
    this.formControl.markAsDirty();
  }
}
