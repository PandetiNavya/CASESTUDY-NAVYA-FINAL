import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemdetailService } from '../services/itemdetail.service';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  items: Item[] = []; // Use 'items' to store the original list of items
  filteredItems: Item[] = [];
  searchTerm: string = '';

  constructor(
    private itemService: ItemdetailService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getAllItems().subscribe(
      data => {
        this.items = data;
        this.filteredItems = data; // Initialize filteredItems with the full list of items
      },
      error => {
        console.error('Error fetching item details', error);
      }
    );
  }

  addToCart(itemId: number): void {
    this.router.navigate(['/order-details', itemId]);
  }

  filterItems(): void {
    this.filteredItems = this.items.filter(item =>
      item.itemName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
