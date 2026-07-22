import { Injectable, signal } from '@angular/core';
import { HargaDiskonProduk } from '../models/harga-diskon-produk.model';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonProdukStore {
  readonly items = signal<HargaDiskonProduk[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaDiskonProduk | null>(null);

  setItems(items: HargaDiskonProduk[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaDiskonProduk | null): void {
    this.selectedItem.set(item);
  }
}
