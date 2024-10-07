// form-deactivate.guard.ts
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanDeactivateFn } from '@angular/router';
import { Observable, of } from 'rxjs';

export const formDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  // Inject MatSnackBar
  const snackBar = inject(MatSnackBar);

  // Open a MatSnackBar and return an Observable to confirm navigation
  return new Observable<boolean>((observer) => {
    const snackBarRef = snackBar.open('Do you really want to leave this page? Any unsaved changes will be lost.', 'Yes, Leave', {
      duration: 5000, // SnackBar duration (5 seconds)
    });

    // SnackBar Action (Yes)
    snackBarRef.onAction().subscribe(() => {
      observer.next(true);  // Allow navigation
      observer.complete();
    });

    // After SnackBar Timeout (No action taken)
    snackBarRef.afterDismissed().subscribe((info) => {
      if (!info.dismissedByAction) {
        observer.next(false);  // Block navigation
      }
      observer.complete();
    });
  });
};
