import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service'; // Make sure this path is correct
import { Order } from '../model/item.model';// Make sure this path is correct

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  order: Order | undefined;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      const parsedOrderId = +orderId;
      this.orderService.getOrderById(parsedOrderId).subscribe(data => {
        this.order = data;
      });
    } else {
      console.error('Order ID is null');
    }
  }
}
