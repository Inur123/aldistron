import { Injectable, signal } from '@angular/core';
import { HargaPaketRinci } from '../models/harga-paket-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HargaPaketRinciStore {
  readonly items = signal<HargaPaketRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaPaketRinci | null>(null);

  setItems(items: HargaPaketRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaPaketRinci | null): void {
    this.selectedItem.set(item);
  }
}
