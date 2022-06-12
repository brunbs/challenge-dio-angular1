import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user-service';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  
  ngOnInit(): void {
    this.users = this.userService.retrieveAll();
  }

}
