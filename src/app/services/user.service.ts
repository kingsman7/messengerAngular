import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];
  constructor() {
    const user0: User = {
      nick: 'Angel',
      age: 34,
      email: 'ae.barrios@hotmail.com',
      friend: true,
      uid: '0',
      status: 'online'
    };
    const user1: User = {
      nick: 'Jose',
      age: 34,
      email: 'jose@hotmail.com',
      friend: false,
      uid: '1',
      status: 'online'
    };
    const user2: User = {
      nick: 'Freddy',
      age: 34,
      email: 'Freddy@hotmail.com',
      friend: true,
      uid: '2',
      status: 'offline'
    };
    const user3: User = {
      nick: 'Carla',
      age: 34,
      email: 'aei.barrios@hotmail.com',
      friend: false,
      uid: '3',
      status: 'busy'
    };
    const user4: User = {
      nick: 'Veronica',
      age: 34,
      email: 'aeo.barrios@hotmail.com',
      friend: true,
      uid: '4',
      status: 'away'
    };
    this.friends = [ user0, user1, user2, user3, user4];
  }
  getFriends() {
    return this.friends;
  }
}
