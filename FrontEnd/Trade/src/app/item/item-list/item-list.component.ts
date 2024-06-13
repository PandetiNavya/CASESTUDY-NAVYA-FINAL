// import { Component, OnInit } from '@angular/core';
// import { Item } from 'src/app/model/item.model';
// import { ItemdetailService } from 'src/app/services/itemdetail.service';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-item-list',
//   templateUrl: './item-list.component.html',
//   styleUrls: ['./item-list.component.css']
// })
// export class ItemListComponent implements OnInit {

//   allItems: Item[] = [];
//   filterValue = "";

//   constructor(private itemHttp:ItemdetailService,private router:Router) {}
//     loaddata() {
//       this.itemHttp.getAllItems().subscribe({
//         next: (response) => {
//           this.allItems = response;
//           console.log(response);
//         },
//         error: (err) => {
//           console.log(err);
//         }
//       });
//    }

//   ngOnInit(): void {
//     this.loaddata();
//   }

//   editItem(itemId: number) {
//     this.router.navigate(['item-edit', itemId]);
//   }

//   viewItem(itemId: number) {
//     this.router.navigate(['item-view', itemId]);
//   }

//   deleteItem(itemId: number) {
//     this.itemHttp.deleteItem(itemId).subscribe({
//       next: (response) => {
//         this.loaddata();
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemdetailService } from 'src/app/services/itemdetail.service';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
   styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  filteredItems: Item[] = [];
  searchTerm: string = '';

  constructor(private itemService: ItemdetailService, private router: Router) { }

  ngOnInit(): void {
    this.loadItems();
  }
  
  loadItems(): void {
    this.itemService.getAllItems().subscribe(
      data => {
        this.items = data;
        this.filteredItems = data; // Ensure filteredItems is initially populated
        console.log('Items loaded:', this.items); // Debug: Check items loaded
      },
      error => {
        console.error('Error loading items', error);
      }
    );
  }
  

  navigateToAddItem(): void {
    this.router.navigate(['/item-add']);
  }

  viewItem(itemId: number): void {
    this.router.navigate(['/item-view', itemId]);
  }

  editItem(itemId: number): void {
    this.router.navigate(['/item-edit', itemId]);
  }

  deleteItem(itemId: number): void {
    this.itemService.deleteItem(itemId).subscribe(() => {
      this.loadItems();
    });
  }
  filterItems(): void {
    console.log('Filtering items...'); // Debug: Method called
    console.log('Search Term:', this.searchTerm); // Debug: Current search term
    this.filteredItems = this.items.filter(item =>
      item.itemName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('Filtered Items:', this.filteredItems); // Debug: Check filtered items
  }
  }


