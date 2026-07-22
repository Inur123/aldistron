import { Injectable, signal } from '@angular/core';
import { HargaPromo } from '../models/harga-promo.model';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoStore {
  readonly items = signal<HargaPromo[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaPromo | null>(null);

  setItems(items: HargaPromo[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaPromo | null): void {
    this.selectedItem.set(item);
  }
}
