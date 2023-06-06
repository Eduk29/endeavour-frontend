import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const header = req.headers
    .append('Authorization', `Bearer ${sessionStorage.getItem('accessToken')}`)
    .append('Content-Type', 'application/json');
  const newReq = req.clone({ headers: header });

  return next(newReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.log('Unauthorized');
        window.location.href = 'authentication/login';
      }
      return of();
    })
  );
};
