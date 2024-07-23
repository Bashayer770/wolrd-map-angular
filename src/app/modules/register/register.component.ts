import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MailSvgComponent } from '../../svg/mail-svg/mail-svg.component';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import API from '../../services';
import { UserSvgComponent } from '../../svg/user-svg/user-svg.component';
import { LockSvgComponent } from '../../svg/lock-svg/lock-svg.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MailSvgComponent,
    UserSvgComponent,
    LockSvgComponent,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPass: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password')!;
    const confirmPass = control.get('confirmPass')!;
    if (password && confirmPass && password.value !== confirmPass.value) {
      confirmPass.setErrors({ passwordMismatch: true });
    } else {
      confirmPass.setErrors(null);
    }
    return null;
  };

  navigateToHome() {
    this.router.navigate(['home']);
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  // onSubmit() {
  //   if (this.registerForm.valid) {
  //     const formData = this.registerForm.value;
  //     console.log('formData', formData);
  //     this.httpClient
  //       .post<{ token: string }>(API.AUTH.REGISTER, formData)
  //       .subscribe({
  //         next: (response) => {
  //           console.log('registration successful', response);
  //           this.authService.login(response.token);
  //           this.navigateToHome();
  //         },
  //         error: (error) => {
  //           console.error('Registration error', error);
  //         },
  //       });
  //   }
  // }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('formData', formData);

      // Ensure the form data has both passwords
      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPass,
      };

      this.httpClient
        .post<{ token: string }>(API.AUTH.REGISTER, payload)
        .subscribe({
          next: (response) => {
            console.log('registration successful', response);
            this.authService.login(response.token);
            // this.navigateToHome();
          },
          error: (error) => {
            console.error('Registration error', error);
            if (error.status === 403) {
              console.error(
                'Access forbidden: Check your API permissions and CORS settings.'
              );
            } else if (error.status === 400) {
              console.error('Validation error:', error.error);
            } else {
              console.error('Server error:', error.error);
            }
          },
        });
    }
  }
}
