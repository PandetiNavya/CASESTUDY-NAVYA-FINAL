import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../model/item.model';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getAllOrders().subscribe(
      data => {
        this.orders = data;
      },
      error => {
        console.error('Error fetching orders', error);
      }
    );
  }

  markAsDelivered(order: Order): void {
    if (order.status === 'confirm') {
      order.status = 'delivered';
      this.orderService.updateOrder(order).subscribe(
        () => {
          alert('Order marked as delivered');
          this.fetchOrders(); // Refresh the orders list
        },
        error => {
          console.error('Error updating order status', error);
        }
      );
    }
  }
}
