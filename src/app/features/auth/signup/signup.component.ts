import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  errorMessage!: string;
  hide = true;
  loginForm: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
    private toastr:ToastrService,
    private socketservice:SocketService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.authService.signUp(this.signupForm.value).subscribe(
        response => {
          if (response) {
            const userType = response.role
            const token = response.token
            const userId = response.userId
            localStorage.setItem('token', token)
            localStorage.setItem('userType', userType)
            localStorage.setItem('userId',userId)
            this.socketservice.connectSocket(userId)
            window.location.reload()
          } 
        },
        error => {
          this.errorMessage = 'An error occurred. Please try again.';
          this.toastr.warning(error.error.message)
        }
      );
    }
  }
}
