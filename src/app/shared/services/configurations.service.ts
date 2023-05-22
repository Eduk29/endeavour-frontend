import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { ISystemValue } from '../model/system-value.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationsService {
  constructor(private http: HttpClient) {}

  public listAllSearchOptions(): Observable<ISystemValue[]> {
    const endpoint = environment.mockedAPI.configurations.searchOptions.listAll;
    return this.http.get<ISystemValue[]>(endpoint);
  }
}
