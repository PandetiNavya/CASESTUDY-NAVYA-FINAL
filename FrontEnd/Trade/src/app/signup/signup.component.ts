import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupData = {
    Username: '',
    Email: '',
    Password: '',
    PhoneNumber: '',
    Address: ''
  };

  constructor(private userService: UserService,private router:Router) { }

  submitSignupForm(): void {
    this.userService.signup(this.signupData)
      .subscribe(
        (response) => {
          console.log('Signup successful:'+ response);
          this.router.navigate(['/user-login']);
          

          // Optionally, redirect the user to another page after successful signup
        },
        (error) => {
          console.error('Error signing up:', error);
          // Handle error (e.g., display error message to the user)
        }
      );
  }
}
