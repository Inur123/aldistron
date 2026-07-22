import { Injectable, signal } from '@angular/core';
import { HargaPromoRinci } from '../models/harga-promo-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HargaPromoRinciStore {
  readonly items = signal<HargaPromoRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaPromoRinci | null>(null);

  setItems(items: HargaPromoRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaPromoRinci | null): void {
    this.selectedItem.set(item);
  }
}
