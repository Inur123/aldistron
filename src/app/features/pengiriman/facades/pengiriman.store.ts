import { Injectable, signal } from '@angular/core';
import { Pengiriman } from '../models/pengiriman.model';

@Injectable({
  providedIn: 'root'
})
export class PengirimanStore {
  readonly items = signal<Pengiriman[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Pengiriman | null>(null);

  setItems(items: Pengiriman[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Pengiriman | null): void {
    this.selectedItem.set(item);
  }
}
