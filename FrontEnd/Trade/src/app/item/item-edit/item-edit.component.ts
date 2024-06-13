import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemdetailService } from 'src/app/services/itemdetail.service';
import { SellerService } from 'src/app/services/seller.service';
import { Item, Seller } from 'src/app/model/item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item: Item = {
    itemId: 0,
    sellerId: 0,
    seller: {
      sellerId: 0,
      sellerName: '',
      sellerPwd: '',
      sellerEmail: '',
      sellerAddress: '',
      sellerPhone: 0
    },
    itemName: '',
    description: '',
    price: 0,
    category: '',
    condition: '',
    images: '',
    location: ''
  };

  constructor(
    private itemService: ItemdetailService,
    private sellerService: SellerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.params['id'];
    this.itemService.getItemById(itemId).subscribe((data: Item) => {
      this.item = data;
      this.loadSellerDetails(data.sellerId);
    });
  }

  loadSellerDetails(sellerId: number): void {
    this.sellerService.getSellerById(sellerId).subscribe((seller: Seller) => {
      this.item.seller = seller;
    });
  }

  updateItem(): void {
    this.itemService.updateItem(this.item).subscribe({
      next: () => {
        this.router.navigate(['/item-list']);
      },
      error: (err) => {
        console.log(this.item);
        console.log(err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/item-list']);
  }
}
