import { Injectable, signal } from '@angular/core';
import { HargaJual } from '../models/harga-jual.model';

@Injectable({
  providedIn: 'root'
})
export class HargaJualStore {
  readonly items = signal<HargaJual[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaJual | null>(null);

  setItems(items: HargaJual[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaJual | null): void {
    this.selectedItem.set(item);
  }
}
