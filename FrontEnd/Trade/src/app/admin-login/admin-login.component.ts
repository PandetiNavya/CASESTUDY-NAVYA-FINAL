import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  private readonly adminUsername: string = 'admin';
  private readonly adminPassword: string = 'admin';

  constructor(private router: Router) {}

  login(): void {
    if (this.username === this.adminUsername && this.password === this.adminPassword) {
      this.router.navigate(['/admin-orders']);
    } else {
      alert('Invalid credentials');
    }
  }
}
