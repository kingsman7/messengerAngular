import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
/* PROPIEDADESD DE LA CLASE SE DECLARAR SIN ASIGNACION  */
friends:user[];
query:string;
/* fin del la propiedad */
  constructor(private userServices: UserService) { 
    this.friends = userServices.getFriends();
   /*  let user0: user ={
      nick:'Angel',
      age: 34,
      email:'ae.barrios@hotmail.com',
      friend:true,
      uid:"0"
    }
    let user1: user ={
      nick:'Angela',
      age: 34,
      email:'aea.barrios@hotmail.com',
      friend:false,
      uid:"1"
    }
    let user2: user ={
      nick:'Angele',
      age: 34,
      email:'aee.barrios@hotmail.com',
      friend:true,
      uid:"2"
    }
    let user3: user ={
      nick:'Angeli',
      age: 34,
      email:'aei.barrios@hotmail.com',
      friend:false,
      uid:"3"
    }
    let user4: user ={
      nick:'Angelo',
      age: 34,
      email:'aeo.barrios@hotmail.com',
      friend:true,
      uid:"4"
    }
    this.friends=[user0,user1,user2,user3,user4]*/
  } 

  ngOnInit() {
  }

}
