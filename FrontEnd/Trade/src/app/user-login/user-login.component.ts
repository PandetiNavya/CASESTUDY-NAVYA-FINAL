import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  loginData = {
    Email: '',
    Password: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  submitLoginForm(): void {
    this.userService.login(this.loginData)
      .subscribe(
        (response) => {
          if (response) {
            console.log('Login successful:', response);
            this.router.navigate(['/item-detail']);
          } else {
            alert('Invalid email or password.');
          }
        },
        (error) => {
          console.error('Error logging in:', error);
          alert('Invalid email or password.');
        }
      );
  }
}
