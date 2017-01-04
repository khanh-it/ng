import { Injectable } from '@angular/core';

export class GroupUser {
  constructor(public id: number, public name: string) { }
}

const CONTACTS: GroupUser[] = [
  new GroupUser(21, 'Sam Spade'),
  new GroupUser(22, 'Nick Danger'),
  new GroupUser(23, 'Nancy Drew')
];

const FETCH_LATENCY = 500;

@Injectable()
export class GroupUserService {

  getGroup_users() {
    return new Promise<GroupUser[]>(resolve => {
      setTimeout(() => { resolve(CONTACTS); }, FETCH_LATENCY);
    });
  }

  getGroup_user(id: number | string) {
    return this.getGroup_users()
      .then(group_users => group_users.find(group_user => group_user.id === +id));
  }
}
