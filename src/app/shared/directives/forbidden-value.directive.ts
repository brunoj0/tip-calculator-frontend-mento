import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenValueValidator(value: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(value);
    console.log(control.value);

    const forbidden = value === control.value;
    console.log(forbidden);
    return forbidden ? {forbiddenValue: {value: control.value}} : null;
  };
}
