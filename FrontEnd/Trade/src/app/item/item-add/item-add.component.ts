import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemdetailService } from 'src/app/services/itemdetail.service';
import { Item, Seller } from 'src/app/model/item.model';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  constructor(private itemHttpService: ItemdetailService, private router: Router) {}

  ngOnInit(): void {}

  addItem(myForm: any) {
    let newItem: Item = {
      itemId: 0,
      sellerId: 0,
      seller: {
        sellerId: 0,
        sellerName: 'string',
        sellerPwd: 'string',
        sellerEmail: 'user@example.com',
        sellerAddress: 'string',
        sellerPhone: 0
      },
      itemName: myForm.value.ItemName,
      description: myForm.value.Description,
      price: myForm.value.Price,
      category: myForm.value.Category,
      condition: myForm.value.Condition,
      images: myForm.value.Images,
      location: myForm.value.Location
    };

    this.itemHttpService.addItems(newItem).subscribe({
      next: (response) => {
        this.router.navigate(['/item-list']);
      },
      error: (err) => {
        console.log(myForm);
        console.log(err);
      }
    });
  }
}
