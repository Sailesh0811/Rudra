import { Injectable } from '@angular/core';
import { Employee } from './employee';
@Injectable()
export class UserService {
users: Employee[] = [];
  constructor() { }

  addUsertoList( e: Employee ) {
this.users.push(e);
}

}
