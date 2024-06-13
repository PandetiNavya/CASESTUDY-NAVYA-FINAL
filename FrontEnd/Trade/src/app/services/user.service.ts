import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5250/api/Users'; // Ensure this URL is correct
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  signup(signupData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, signupData).pipe(
      catchError(error => {
        console.error('Signup error:', error);
        return throwError(error);
      })
    );
  }

  login(loginData: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, loginData).pipe(
      tap(user => {
        this.currentUserSubject.next(user);
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`).pipe(
      catchError(error => {
        console.error('Get user error:', error);
        return throwError(error);
      })
    );
  }

  updateUser(userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userData.userId}`, userData).pipe(
      catchError(error => {
        console.error('Update user error:', error);
        return throwError(error);
      })
    );
  }

  getLoggedInUser(): User | null {
    return this.currentUserSubject.value;
  }
}
