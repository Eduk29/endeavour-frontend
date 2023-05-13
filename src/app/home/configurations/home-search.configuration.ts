import { ISearchInputParameters } from './../../shared/components/search-input/model/search-input-parameters.model';

export const homeSearchConfiguration: ISearchInputParameters = {
  displaySearchInput: true,
  displaySearchType: true,
  searchTypeList: [
    { key: 'id', value: 'Id' },
    { key: 'name', value: 'Name' },
  ],
};
