const mockedBasePath = 'http://localhost:3001/api';
const microserviceBasePath = 'http://localhost:8081/api/v1';

export const environment = {
  production: false,
  mockedAPI: {
    authentication: `${mockedBasePath}/auth`,
    configurations: {
      searchOptions: {
        listAll: `${mockedBasePath}/search-options`,
      },
    },
    person: {
      listAll: `${mockedBasePath}/persons`,
    },
  },
  microserviceAPI: {
    person: {
      listAll: `${microserviceBasePath}/persons`,
    },
  },
};
