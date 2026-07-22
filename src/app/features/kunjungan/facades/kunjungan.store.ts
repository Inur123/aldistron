import { Injectable, signal } from '@angular/core';
import { Kunjungan } from '../models/kunjungan.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganStore {
  readonly items = signal<Kunjungan[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Kunjungan | null>(null);

  setItems(items: Kunjungan[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Kunjungan | null): void {
    this.selectedItem.set(item);
  }
}
