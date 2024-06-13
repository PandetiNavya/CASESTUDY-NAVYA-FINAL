// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Item } from '../model/item.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ItemdetailService {

//   private baseUrl: string = 'https://localhost:7204/api/Items';

//   constructor(private httpClient: HttpClient) { }

//   // Get all items
//   getAllItems(): Observable<Item[]> {
//     return this.httpClient.get<Item[]>(this.baseUrl);
//   }

//   // Get item by ID
//   getItemById(id: number): Observable<Item> {
//     return this.httpClient.get<Item>(`${this.baseUrl}/${id}`);
//   }

//   // Add a new item
//   addItems(item: Item): Observable<Item> {
//     return this.httpClient.post<Item>(this.baseUrl, item);
//   }

//   // Update an item
//   updateItem(item: Item): Observable<void> {
//     return this.httpClient.put<void>(`${this.baseUrl}/${item.itemId}`, item);
//   }

//   // Delete an item
//   deleteItem(itemId: number): Observable<void> {
//     return this.httpClient.delete<void>(`${this.baseUrl}/${itemId}`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemdetailService {
  private baseUrl: string = 'http://localhost:5250/api/Items';

  constructor(private httpClient: HttpClient) { }

  // Get all items
  getAllItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.baseUrl);
  }

  // Get item by ID
  getItemById(id: number): Observable<Item> {
    return this.httpClient.get<Item>(`${this.baseUrl}/${id}`);
  }

  // Add a new item
  addItems(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.baseUrl, item);
  }

  // Update an item
  updateItem(item: Item): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${item.itemId}`, item);
  }

  // Delete an item
  deleteItem(itemId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${itemId}`);
  }
}
