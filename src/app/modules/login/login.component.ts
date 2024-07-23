import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import API from '../../services';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MailSvgComponent } from '../../svg/mail-svg/mail-svg.component';
import { UserSvgComponent } from '../../svg/user-svg/user-svg.component';
import { LockSvgComponent } from '../../svg/lock-svg/lock-svg.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UserSvgComponent,
    LockSvgComponent,
    MailSvgComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: String = '';
  password: String = '';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  navigateToRegister() {
    this.router.navigate(['register']);
  }

  navigateToBeen() {
    this.router.navigate(['been']);
  }

  onSubmit() {
    const loginData = {
      username: this.username,
      password: this.password,
    };

    this.httpClient
      .post<{ token: string }>(API.AUTH.LOGIN, loginData)
      .subscribe(
        (response) => {
          console.log('login Successful', response);
          this.authService.login(response.token);
          this.navigateToBeen();
        },
        (error) => {
          console.log('login unsuccessful', error);
        }
      );
  }
}
