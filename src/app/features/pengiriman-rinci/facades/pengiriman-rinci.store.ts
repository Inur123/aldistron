import { Injectable, signal } from '@angular/core';
import { PengirimanRinci } from '../models/pengiriman-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class PengirimanRinciStore {
  readonly items = signal<PengirimanRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<PengirimanRinci | null>(null);

  setItems(items: PengirimanRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: PengirimanRinci | null): void {
    this.selectedItem.set(item);
  }
}
