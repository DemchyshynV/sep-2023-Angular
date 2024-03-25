import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sep2023Angular';
}
