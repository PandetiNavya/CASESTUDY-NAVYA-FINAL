// seller-login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {

  loginData = {
    SellerEmail: '',
    SellerPwd: ''
  };

  constructor(private sellerService: SellerService, private router: Router) { }

  submitLoginForm(): void {
    this.sellerService.login(this.loginData)
      .subscribe(
        (response) => {
          if(response){
          console.log('Login successful:', response);
          // Redirect to seller home upon successful login
          this.router.navigate(['/item-list']);
          } else {
            alert("Invalid email or password");
          }
        },
        (error) => {
          console.error('Error logging in:', error);
          
          // Handle login error (e.g., display error message to the user)
        }
      );
  }
}
