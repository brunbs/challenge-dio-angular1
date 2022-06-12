import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'spa-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.url[1].path === 'new') {
      this.user = {
        id: null,
        name: '',
        email: '',
        avatar: '',
        contact: '',
        addedOn: null
      }
    } else {
      this.user = this.userService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }
    
  }

  save(): void {
    this.userService.save(this.user);
  }

}
