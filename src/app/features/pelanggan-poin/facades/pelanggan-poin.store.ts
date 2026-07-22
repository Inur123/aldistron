import { Injectable, signal } from '@angular/core';
import { PelangganPoin } from '../models/pelanggan-poin.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganPoinStore {
  readonly items = signal<PelangganPoin[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<PelangganPoin | null>(null);

  setItems(items: PelangganPoin[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: PelangganPoin | null): void {
    this.selectedItem.set(item);
  }
}
