import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPaginatedResponse } from 'src/app/shared/model/paginated-response.model';
import { IPaginationParameters } from 'src/app/shared/model/pagination-parameters.model';
import { environment } from 'src/environments/environment.development';

import { IPerson } from '../models/person.model';
import ServicesUtils from './../../shared/utils/services.utils';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  public listAll(paginationParameters: IPaginationParameters): Observable<IPaginatedResponse<IPerson>> {
    const url = `${environment.mockedAPI.person.listAll}?_page=${(paginationParameters.pageIndex as number) + 1}&_limit=${
      paginationParameters.pageSize as number
    }`;

    return this.http.get<IPerson[]>(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<IPerson[]>) => {
        return ServicesUtils.convertToPaginatedResponse(response, paginationParameters);
      })
    );
  }
}
