import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
/* PROPIEDADESD DE LA CLASE SE DECLARAR SIN ASIGNACION  */
friends: User[];
query: string;
/* fin del la propiedad */
  constructor(private userServices: UserService) {
    this.friends = userServices.getFriends();
  }
  ngOnInit() {
  }

}
