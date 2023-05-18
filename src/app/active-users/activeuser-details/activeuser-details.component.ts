import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/user-services/user-service.service';

@Component({
  selector: 'app-activeuser-details',
  templateUrl: './activeuser-details.component.html',
  styleUrls: ['./activeuser-details.component.css'],
})
export class ActiveuserDetailsComponent {
  @Input() activeUser;

  constructor(private userService: UserService) {}

  changeStatus() {
    this.userService.changeUserStatus(this.activeUser)
  }
}
