import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
/* capturar los parametros que se les manda por url. usando ActivatedRoute y la propiedad snapshot */
export class ChatComponent implements OnInit {
  /* se declara una variable global */
  friendId: any;
  friends: User[];
  friend: User;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService ) {
    this.friendId = this.activatedRoute.snapshot.params.uid;
    this.friends = this.userService.getFriends();
    this.friend = this.friends.find((record) => {
      return record.uid === this.friendId;
    });
    console.log(this.friend);
  }

  ngOnInit() {
  }

}
