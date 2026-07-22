import { Injectable, signal } from '@angular/core';
import { HargaMomen } from '../models/harga-momen.model';

@Injectable({
  providedIn: 'root'
})
export class HargaMomenStore {
  readonly items = signal<HargaMomen[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaMomen | null>(null);

  setItems(items: HargaMomen[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaMomen | null): void {
    this.selectedItem.set(item);
  }
}
