import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this._initForm()
  }

  private _initForm(): void {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  login(): void {
    // this.authService.login(this.form.value).subscribe(() => {
    //   this.router.navigate(['/cars'])
    // })
    this.authService.login(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['/cars'])
          this.error = false
        },
        error: err => {
          this.error = true
        },

      }
    )
  }
}
