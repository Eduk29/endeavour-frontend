import { HttpResponse } from '@angular/common/http';
import { IPerson } from 'src/app/person/models/person.model';

import { IPaginatedResponse } from '../model/paginated-response.model';
import { IPaginationParameters } from '../model/pagination-parameters.model';
import { ISearchFilter } from '../components/search-input/model/search-filter.model';

export default class ServicesUtils {
  public static convertToPaginatedResponse(
    httpResponse: HttpResponse<IPerson[]>,
    paginationParameters: IPaginationParameters
  ): IPaginatedResponse<IPerson> {
    const total: string = httpResponse.headers.get('X-Total-Count') || '0';
    const paginatedResponse: IPaginatedResponse<IPerson> = {};
    paginatedResponse.content = httpResponse.body || [];
    paginatedResponse.pageNumber = paginationParameters.pageIndex;
    paginatedResponse.pageSize = paginationParameters.pageSize;
    paginatedResponse.timestamp = new Date().toISOString();
    paginatedResponse.totalElements = +total;
    paginatedResponse.totalPages = Math.ceil(+total / (paginationParameters.pageSize || 1));
    return paginatedResponse;
  }

  public static constructRequestParameters(paginationParameters?: IPaginationParameters, searchParameters?: ISearchFilter): string {
    const resquestParameters: string[] = [];

    if (!!paginationParameters && paginationParameters.pageIndex != undefined) {
      const basePageIndexParameter = `_page=${(paginationParameters.pageIndex as number) + 1}`;
      resquestParameters.push(basePageIndexParameter);
    }

    if (paginationParameters && paginationParameters.pageSize != undefined) {
      const basePageSizeParameter = `_limit=${paginationParameters.pageSize as number}`;
      resquestParameters.push(basePageSizeParameter);
    }

    if (searchParameters && searchParameters.searchParameter != undefined && searchParameters != undefined) {
      const baseSearchParameter = `${searchParameters.searchType}=${searchParameters.searchParameter}`;
      resquestParameters.push(baseSearchParameter);
    }

    return resquestParameters.join('&');
  }
}
