import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyField, FormlyModule } from '@ngx-formly/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-date-picker',
  imports: [FormsModule, ReactiveFormsModule, FormlyModule, TranslateModule],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.scss'
})
export class DatePicker extends FieldType<FieldTypeConfig>  {

}
