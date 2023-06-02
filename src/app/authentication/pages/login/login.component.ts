import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';

import { IAuthenticationResponse } from '../../model/authentication-response.model';
import { AuthenticationService } from '../../services/authentication.service';
import { FeedbackMessagesComponent } from 'src/app/shared/components/feedback-messages/feedback-messages.component';
import { IFeedbackMessageParameters } from 'src/app/shared/components/feedback-messages/model/feedback-message-parameters.model';

@Component({
  selector: 'edv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  public authenticationForm: FormGroup;

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.authenticationForm = this.constructForm(formBuilder);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.unsubscribe();
  }

  public login(): void {
    this.authenticationService
      .loginUser(this.authenticationForm.value)
      .pipe(
        tap((response: IAuthenticationResponse) => {
          this.storeUserData(response);
          this.router.navigate(['..', 'home']);
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe({
        error: (error: HttpErrorResponse) => {
          if (error.status === 401) {
            const unauthorizedParameters: IFeedbackMessageParameters = {
              displayCloseButton: false,
              displayIcon: true,
              iconName: 'warning',
              message: 'Username/Password incorrect!',
            };
            this.displayFeedbackMessage(unauthorizedParameters);
          }
        },
      });
  }

  public resetForm(): void {
    this.authenticationForm.reset();
  }

  private constructForm(builder: FormBuilder): FormGroup {
    return builder.group({
      username: new FormControl<string>(''),
      password: new FormControl<string>(''),
    });
  }

  private displayFeedbackMessage(parameters: IFeedbackMessageParameters): void {
    this.snackbar.openFromComponent(FeedbackMessagesComponent, {
      data: parameters,
      duration: 2000,
      horizontalPosition: 'right',
      panelClass: 'error-snackbar',
      verticalPosition: 'top',
    });
  }

  private storeUserData(userData: IAuthenticationResponse): void {
    sessionStorage.setItem('accessToken', userData.accessToken);
    sessionStorage.setItem('username', userData.username);
    sessionStorage.setItem('personId', userData.person.id.toLocaleString());
    sessionStorage.setItem('roles', JSON.stringify(userData.roles));
  }
}
