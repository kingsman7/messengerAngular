import { Injectable } from '@angular/core';
import { user } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends:user[];
  constructor() {
    let user0: user ={
      nick:'Angel',
      age: 34,
      email:'ae.barrios@hotmail.com',
      friend:true,
      uid:"0",
      status:"online"
    }
    let user1: user ={
      nick:'Angela',
      age: 34,
      email:'aea.barrios@hotmail.com',
      friend:false,
      uid:"1",
      status:"online"
    }
    let user2: user ={
      nick:'Angele',
      age: 34,
      email:'aee.barrios@hotmail.com',
      friend:true,
      uid:"2",
      status:"offline"
    }
    let user3: user ={
      nick:'Angeli',
      age: 34,
      email:'aei.barrios@hotmail.com',
      friend:false,
      uid:"3",
      status:"busy"
    }
    let user4: user ={
      nick:'Angelo',
      age: 34,
      email:'aeo.barrios@hotmail.com',
      friend:true,
      uid:"4",
      status:"away"
    }
    this.friends=[ user0, user1, user2, user3, user4]
  }
  getFriends(){
    return this.friends
  }
}
