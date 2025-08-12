import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-files-input',
  imports: [
    FormsModule,
    FormlyModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  templateUrl: './files-input.html',
  styleUrl: './files-input.scss',
})
export class FilesInput extends FieldType {
  get control(): FormControl {
    return this.formControl as FormControl;
  }

  imagePreview: string | null = null;

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.imagePreview = URL.createObjectURL(file);
      this.control.setValue(file); // casted formControl as FormControl here
    }
  }
}
