import { Injectable, signal } from '@angular/core';
import { Pelanggan } from '../models/pelanggan.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganStore {
  readonly items = signal<Pelanggan[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Pelanggan | null>(null);

  setItems(items: Pelanggan[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Pelanggan | null): void {
    this.selectedItem.set(item);
  }
}
