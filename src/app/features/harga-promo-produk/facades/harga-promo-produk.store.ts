import { Injectable, signal } from '@angular/core';
import { HargaPromoProduk } from '../models/harga-promo-produk.model';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoProdukStore {
  readonly items = signal<HargaPromoProduk[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaPromoProduk | null>(null);

  setItems(items: HargaPromoProduk[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaPromoProduk | null): void {
    this.selectedItem.set(item);
  }
}
