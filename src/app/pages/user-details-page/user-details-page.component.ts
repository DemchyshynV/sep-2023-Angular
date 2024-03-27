import { Component } from '@angular/core';
import {UserDetailsComponent} from "../../components/users-container/user-details/user-details.component";

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [
    UserDetailsComponent
  ],
  templateUrl: './user-details-page.component.html',
  styleUrl: './user-details-page.component.css'
})
export class UserDetailsPageComponent {

}
