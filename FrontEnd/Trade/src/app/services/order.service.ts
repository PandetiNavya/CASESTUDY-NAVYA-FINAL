import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl: string = 'http://localhost:5250/api/Orders'; // Your API endpoint for orders

  constructor(private http: HttpClient) {}

  // Function to place an order
  placeOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl, order);
  }

  // Function to get order by ID
  getOrderById(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/${orderId}`);
  }

  // Fetch all orders
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  // Update order
  updateOrder(order: Order): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${order.orderId}`, order);
  }
}
