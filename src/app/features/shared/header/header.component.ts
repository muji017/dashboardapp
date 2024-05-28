import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MatButtonModule],
})
export class HeaderComponent {

  constructor(
    private router:Router
  ){}
  userlist() {
    this.router.navigate(['/admin/userlist'])
  }
  chat() {
    this.router.navigate(['/chat'])
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
