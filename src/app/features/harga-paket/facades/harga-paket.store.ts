import { Injectable, signal } from '@angular/core';
import { HargaPaket } from '../models/harga-paket.model';

@Injectable({
  providedIn: 'root'
})
export class HargaPaketStore {
  readonly items = signal<HargaPaket[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaPaket | null>(null);

  setItems(items: HargaPaket[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaPaket | null): void {
    this.selectedItem.set(item);
  }
}
