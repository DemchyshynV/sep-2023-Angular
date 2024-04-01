import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getById(id).subscribe(value => this.user = value)
    })
  }

}
