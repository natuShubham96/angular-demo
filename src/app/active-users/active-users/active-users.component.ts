import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-services/user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit{
  activeUsers: {name: string, status: string}[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.activeUsers = this.userService.getUsers().filter(user => user.status === 'Active');
  }
}
