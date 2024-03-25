import {Component, Input} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
@Input()
usersDetails:IUser
}
