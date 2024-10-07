### What is a Custom Validator?
A **custom validator** in Angular is a function that checks if a form control meets certain criteria. It works like built-in validators (e.g., `required`, `min`, `max`) but allows you to define your own rules. If the control’s value doesn’t pass the custom rule, it returns an error object; otherwise, it returns `null`.

### Code Explanation:

```typescript
import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]', // This applies the directive wherever the 'appEmailValidator' attribute is used.
  providers: [
    {
      provide: NG_VALIDATORS, // This registers the custom validator with Angular's built-in validators.
      useExisting: EmailValidatorDirective, // Angular will use this directive for validation.
      multi: true, // Ensures that this custom validator can work alongside other validators.
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  constructor() {}

  // The validate method is where the validation logic happens.
  validate(control: AbstractControl): ValidationErrors | null {
    const email = control.value; // The form control's value (input).
    
    // If the value is not a valid email format, return an error object.
    if (
      email &&
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
    ) {
      return { invalidEmail: true }; // Validation error with a key 'invalidEmail'.
    }
    
    // If the value is valid, return null (no errors).
    return null;
  }
}
```

### Explanation of Each Part:

- **`@Directive`**: This makes the class an Angular directive that you can apply to form elements.
  
- **`selector: '[appEmailValidator]'`**: This tells Angular to use this directive when the `appEmailValidator` attribute is found in HTML.

- **`validate(control: AbstractControl)`**: The method that Angular calls to validate the control’s value.

- **Validation Logic**: 
  - The regular expression checks if the input follows a valid email pattern.
  - If the email doesn't match the pattern, `{ invalidEmail: true }` is returned, marking the input as invalid.
  - If it's valid, `null` is returned, meaning no error.

This custom validator is now available for use in any Angular form, and will trigger validation when applied.