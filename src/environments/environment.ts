const mockedBasePath = 'http://localhost:3001/api';
const microserviceBasePath = 'http://localhost:8081/api/v1';

export const environment = {
  production: true,
  mockedAPI: {
    configurations: {
      searchOptions: {
        listAll: `${mockedBasePath}/serach-options`,
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
