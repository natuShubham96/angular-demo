import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-services/user-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers: {name: string, status: string}[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.inactiveUsers = this.userService.getUsers().filter(user => user.status === 'Inactive');
  }
}
