import { Injectable, signal } from '@angular/core';
import { HttpStatus } from '../models/http-status.model';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusStore {
  readonly items = signal<HttpStatus[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HttpStatus | null>(null);

  setItems(items: HttpStatus[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HttpStatus | null): void {
    this.selectedItem.set(item);
  }
}
