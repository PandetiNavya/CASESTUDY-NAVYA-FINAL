import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/item.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  loggedInUser: User | null = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loggedInUser = this.userService.getLoggedInUser();
    if (this.loggedInUser) {
      console.log("Logged-in user data received:", this.loggedInUser);
    } else {
      console.log("No logged-in user found.");
      // Optionally, redirect to login or handle the error case
    }
  }

  editUser(): void {
    if (this.loggedInUser) {
      this.router.navigate(['/edit-user', this.loggedInUser.userId]);
    } else {
      console.error("No user to edit.");
    }
  }

  goBack(): void {
    this.router.navigate(['/item-detail']);
  }
}
