import { Injectable } from "@angular/core";
import { CounterService } from "./counter-service.service";

@Injectable()
export class UserService {
     private users = [
        {
            name: 'KL Rahul',
            status: 'Inactive'
        },
        {
            name: 'MS Dhoni',
            status: 'Active'
        },
        {
            name: 'Jassi Bumrah',
            status: 'Inactive'
        },
        {
            name: 'AJ Rahane',
            status: 'Active'
        }
    ]

    constructor(private counterService: CounterService) {}

    changeUserStatus(user) {
        if(user.status === 'Active') {
            user.status = 'Inactive';
            this.counterService.incrementInactive();
        } else {
            user.status = 'Active';
            this.counterService.incrementActive();
        }   
        const index = this.users.findIndex(usr => usr.name === user.name);
        this.users[index] = user;    
    }

    getUsers() {
        return this.users;
    }
}