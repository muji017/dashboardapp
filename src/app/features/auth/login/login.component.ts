import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          if (response) {
            const userType = response.role
            const token = response.token
            localStorage.setItem('token', token)
            localStorage.setItem('userType',userType)
            window.location.reload()
          }
        },
        error => {
          this.errorMessage = error.message;
          console.log(error.error.message);
          
          this.toastr.warning(error.error.message)
        }
      );
    }
  }
}
