import { Injectable } from '@angular/core';
export class User {
  constructor(public id: number, public name: string) { }
}
const CONTACTS: User[] = [
  new User(1, 'Sam Spade'),
  new User(2, 'Nick Danger'),
  new User(3, 'Nancy Drew')
];
const FETCH_LATENCY = 500;
@Injectable()
export class UserService {

  getUsers() {
    return new Promise<User[]>(resolve => {
      setTimeout(() => { resolve(CONTACTS); }, FETCH_LATENCY);
    });
  }

  getUser(id: number | string) {
    return this.getUsers()
      .then(users => users.find(user => user.id === +id));
  }
}
