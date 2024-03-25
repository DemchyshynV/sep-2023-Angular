import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";
import {UserComponent} from "../user/user.component";
import {NgFor, NgIf} from "@angular/common";
import {UserDetailsComponent} from "../user-details/user-details.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgFor,
    NgIf,
    UserDetailsComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: IUser[];
  usersDetails:IUser;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUserEven(user: IUser) {
    this.usersDetails = user
  }
}
