import { Component } from '@angular/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-files-input',
  templateUrl: './files-input.html',
  styleUrls: ['./files-input.scss'],
  // fixed typo from styleUrl to styleUrls
  standalone: true,
  imports: [
    FormsModule,
    FormlyModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class FilesInput extends FieldType {
  get control(): FormControl {
    return this.formControl as FormControl;
  }

  imagePreview: string | null = null;

  ngOnInit() {
    this.setInitialPreview();
  }

  ngOnChanges() {
    this.setInitialPreview();
  }

  private setInitialPreview() {
    const modelValue = this.formControl.value;
    if (typeof modelValue === 'string' && modelValue.length > 0) {
      // if the value is a string (existing image URL), show it
      this.imagePreview = modelValue;
    } else if (modelValue instanceof File) {
      // if the value is a File, create object URL
      this.imagePreview = URL.createObjectURL(modelValue);
    } else {
      this.imagePreview = null;
    }
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.imagePreview = URL.createObjectURL(file);
      this.control.setValue(file);
    }
  }
}
