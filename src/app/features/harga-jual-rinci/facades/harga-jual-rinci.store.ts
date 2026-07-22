import { Injectable, signal } from '@angular/core';
import { HargaJualRinci } from '../models/harga-jual-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HargaJualRinciStore {
  readonly items = signal<HargaJualRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaJualRinci | null>(null);

  setItems(items: HargaJualRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaJualRinci | null): void {
    this.selectedItem.set(item);
  }
}
