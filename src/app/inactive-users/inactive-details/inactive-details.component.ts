import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/user-services/user-service.service';

@Component({
  selector: 'app-inactive-details',
  templateUrl: './inactive-details.component.html',
  styleUrls: ['./inactive-details.component.css']
})
export class InactiveDetailsComponent {
  @Input() inactiveUser;

  constructor(private userService: UserService) {}

  changeStatus() {
    this.userService.changeUserStatus(this.inactiveUser)
  }
}
