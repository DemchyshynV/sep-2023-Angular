import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  authUser: IUser;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.getAuthUser().subscribe(value => {
      this.authUser = value
      if (!value && this.authService.getAccessToken()) {
        this.authService.me().subscribe()
      }
    })

  }
}
