import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IPerson } from '../models/person.model';
import { environment } from './../../../environments/environment.development';
import { ISearchFilter } from './../../shared/components/search-input/model/search-filter.model';
import { IPaginatedResponse } from './../../shared/model/paginated-response.model';
import { IPaginationParameters } from './../../shared/model/pagination-parameters.model';
import ServicesUtils from './../../shared/utils/services.utils';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  public listAll(paginationParameters: IPaginationParameters): Observable<IPaginatedResponse<IPerson>> {
    const basePath = environment.mockedAPI.person.listAll;
    const resquestParameters = ServicesUtils.constructRequestParameters(paginationParameters);
    const url = `${basePath}?${resquestParameters}`;

    return this.http.get<IPerson[]>(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<IPerson[]>) => {
        return ServicesUtils.convertToPaginatedResponse(response, paginationParameters);
      })
    );
  }

  public listByParameter(
    searchParameters: ISearchFilter,
    paginationParameters: IPaginationParameters
  ): Observable<IPaginatedResponse<IPerson>> {
    const basePath = environment.mockedAPI.person.listAll;
    const resquestParameters = ServicesUtils.constructRequestParameters(paginationParameters, searchParameters);
    const url = `${basePath}?${resquestParameters}`;

    return this.http.get<IPerson[]>(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<IPerson[]>) => {
        return ServicesUtils.convertToPaginatedResponse(response, paginationParameters);
      })
    );
  }
}
