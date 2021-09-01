import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenValueValidator(value: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const forbidden = value === control.value;
    return forbidden ? {forbiddenValue: {value: control.value}} : null;
  };
}
