import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private apiUrl = 'http://localhost:5250/api/Sellers'; // Replace with your Web API URL

  constructor(private http: HttpClient) { }

  signup(sellerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, sellerData); // Fix the URL interpolation here
  }

  login(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData); // Fix the URL interpolation here
  }
  
  getSellerById(id: number): Observable<Seller> {
    return this.http.get<Seller>(`${this.apiUrl}/${id}`);
  }
}
