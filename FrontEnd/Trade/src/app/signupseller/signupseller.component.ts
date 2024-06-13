import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-signupseller',
  templateUrl: './signupseller.component.html',
  styleUrls: ['./signupseller.component.css']
})
export class SignupsellerComponent {

  signupData = {
    SellerName: '',
    SellerEmail: '',
    SellerPwd: '',
    SellerPhone: '',
    SellerAddress: ''
  };

  constructor(private sellerService: SellerService,private router:Router) { }

  submitSignupForm(): void {
    this.sellerService.signup(this.signupData)
      .subscribe(
        (response) => {
          console.log('Signup successful:', response);
          this.router.navigate(['/seller-login']);
          // Optionally, redirect the user to another page after successful signup
        },
        error => {
          console.error('Error signing up:', error);
          // Handle error (e.g., display error message to the user)
        }
      );
  }
}
