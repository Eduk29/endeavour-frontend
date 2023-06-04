import { IPerson } from './../../person/models/person.model';

export interface IAuthenticationResponse {
  accessToken: string;
  person: IPerson;
  roles: string[];
  username: string;
}
