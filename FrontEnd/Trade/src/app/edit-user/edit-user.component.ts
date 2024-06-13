import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup
import { UserService } from '../services/user.service';
import { User } from '../model/item.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: number | undefined;
  user: User = {
    userId: 0,
    username: '',
    email: '',
    password: '',
    phoneNumber: 0,
    address: ''
  };

  editUserForm: FormGroup; // Define editUserForm as a FormGroup

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder // Inject FormBuilder
  ) {
    this.editUserForm = this.fb.group({ // Initialize editUserForm in the constructor
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['userId']; // Convert userId to a number
      this.userService.getUser(this.userId.toString()).subscribe(
        (data: User) => {
          this.user = data;
          // Patch the retrieved user data into the form
          this.editUserForm.patchValue({
            username: this.user.username,
            email: this.user.email,
            password: this.user.password,
            phoneNumber: this.user.phoneNumber,
            address: this.user.address
          });
        },
        (error) => {
          console.error('Error fetching user details', error);
        }
      );
    });
  }

  onSubmit(): void {
    // Update user object with form values
    this.user.username = this.editUserForm.value.username;
    this.user.email = this.editUserForm.value.email;
    this.user.password = this.editUserForm.value.password;
    this.user.phoneNumber = this.editUserForm.value.phoneNumber;
    this.user.address = this.editUserForm.value.address;

    // Call updateUser method in UserService
    this.userService.updateUser(this.user).subscribe(
      () => {
        console.log('User details updated successfully');
        this.router.navigate(['/user-login']);
      },
      (error) => {
        console.error('Error updating user details', error);
        // Optionally, display an error message to the user
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/user-profile/:id']);
  }
}
