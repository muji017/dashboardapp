import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  errorMessage!: string;
  hide = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // this.authService.login(this.loginForm.value).subscribe(
      //   response => {
      //     if (response) {
      //       this.router.navigate(['/dashboard']);
      //     } else {
      //       this.errorMessage = 'Invalid username or password';
      //     }
      //   },
      //   error => {
      //     this.errorMessage = 'An error occurred. Please try again.';
      //   }
      // );
    }
  }
}
