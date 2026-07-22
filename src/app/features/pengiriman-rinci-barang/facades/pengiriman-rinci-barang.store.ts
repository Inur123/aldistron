import { Injectable, signal } from '@angular/core';
import { PengirimanRinciBarang } from '../models/pengiriman-rinci-barang.model';

@Injectable({
  providedIn: 'root'
})
export class PengirimanRinciBarangStore {
  readonly items = signal<PengirimanRinciBarang[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<PengirimanRinciBarang | null>(null);

  setItems(items: PengirimanRinciBarang[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: PengirimanRinciBarang | null): void {
    this.selectedItem.set(item);
  }
}
