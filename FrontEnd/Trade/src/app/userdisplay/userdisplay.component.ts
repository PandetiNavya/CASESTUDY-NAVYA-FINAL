import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemdetailService } from 'src/app/services/itemdetail.service';
import { Item } from 'src/app/model/item.model';
@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
  items: Item[] = [];
  constructor(private itemService: ItemdetailService, private router: Router) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getAllItems().subscribe((data: Item[]) => {
      this.items = data;
    });
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
  
}