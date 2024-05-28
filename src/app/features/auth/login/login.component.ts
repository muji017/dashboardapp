import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { SocketService } from 'src/app/services/socket.service';

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
    private toastr:ToastrService,
    private socketservice:SocketService
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
            const userId = response.userId
            localStorage.setItem('token', token)
            localStorage.setItem('userType',userType)
            localStorage.setItem('userId',userId)
            this.socketservice.connectSocket(userId)
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
