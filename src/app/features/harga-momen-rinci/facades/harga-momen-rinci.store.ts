import { Injectable, signal } from '@angular/core';
import { HargaMomenRinci } from '../models/harga-momen-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HargaMomenRinciStore {
  readonly items = signal<HargaMomenRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaMomenRinci | null>(null);

  setItems(items: HargaMomenRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaMomenRinci | null): void {
    this.selectedItem.set(item);
  }
}
