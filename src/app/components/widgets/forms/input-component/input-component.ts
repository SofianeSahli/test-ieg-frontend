import { Component } from '@angular/core';
import {
  FieldType,
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-component',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    TranslateModule,
    CommonModule,
  ],
  standalone: true,
  templateUrl: './input-component.html',
  styleUrl: './input-component.scss',
})
export class InputComponent extends FieldType<FieldTypeConfig> {
  constructor() {
    super();
  }
}
