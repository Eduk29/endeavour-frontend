import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { IAuthenticationCredentials } from '../model/authentication-credentials.model';
import { IAuthenticationResponse } from '../model/authentication-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  public loginUser(credentials: IAuthenticationCredentials): Observable<IAuthenticationResponse> {
    const basePath = `${environment.mockedAPI.authentication}/login`;
    return this.http.post<IAuthenticationResponse>(basePath, credentials);
  }
}
