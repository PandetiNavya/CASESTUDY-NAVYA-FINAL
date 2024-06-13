// import { Component, OnInit } from '@angular/core';
// import { ItemdetailService } from 'src/app/services/itemdetail.service';
// import { Item } from 'src/app/model/item.model';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-item-view',
//   templateUrl: './item-view.component.html',
//   styleUrls: ['./item-view.component.css']
// })
// export class ItemViewComponent implements OnInit {
//   fetchedItem: Item = {
//     ItemId: 0,
//     ItemName: '',
//     Description: '',
//     Price: 0,
//     Category: '',
//     Condition: '',
//     Images: '',
//     Location: ''
//   };

//   constructor(
//     private itemHttpService: ItemdetailService,
//     private activatedRoute: ActivatedRoute,
//     private router: Router
//   ) { }

//   back() {
//     this.router.navigate(['item-list']);
//   }

//   ngOnInit(): void {
//     let itemId = this.activatedRoute.snapshot.paramMap.get('itemId');
//     if (itemId != null) {
//       this.itemHttpService.getItemById(+itemId).subscribe({
//         next: (response) => { this.fetchedItem = response; },
//         error: (err) => console.log(err)
//       });
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemdetailService } from 'src/app/services/itemdetail.service';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.params['id'];
    this.itemService.getItemById(itemId).subscribe((data: Item) => {
      this.item = data;
      
    });
  }

  goBack(): void {
    this.router.navigate(['/item-list']);
  }
}

