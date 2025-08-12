import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Generates a regex-based validator for use in Angular forms
 * @param pattern - Regular expression to validate against
 * @param errorKey - Custom error key to return on validation failure
 */
export const regexValidator = (pattern: RegExp, errorKey: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null; // Don't validate empty values (use required separately)
    return pattern.test(control.value) ? null : { [errorKey]: true };
  };
}
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PHONE_REGEX = /^\d{8}$/; // Example: 123-456-7890