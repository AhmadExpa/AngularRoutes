import { ErrorHandler } from '@angular/core';
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error: Error) {
    console.log('Error Found By Global Error Handler: => ', error);
  }
}
