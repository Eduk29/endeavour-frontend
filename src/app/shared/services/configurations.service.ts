import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

import { ISystemValue } from '../model/system-value.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationsService {
  public searchOptions$!: BehaviorSubject<ISystemValue[]>;

  constructor(private http: HttpClient) {
    this.initBehaviorSubjects();
  }

  public listAllSearchOptions(): void {
    const endpoint = environment.mockedAPI.configurations.searchOptions.listAll;
    this.http
      .get<ISystemValue[]>(endpoint)
      .pipe(tap((response: ISystemValue[]) => this.searchOptions$.next(response)))
      .subscribe();
  }

  private initBehaviorSubjects(): void {
    this.searchOptions$ = new BehaviorSubject<ISystemValue[]>([]);
  }
}
