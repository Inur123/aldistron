import { Injectable, signal } from '@angular/core';
import { KunjunganJual } from '../models/kunjungan-jual.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganJualStore {
  readonly items = signal<KunjunganJual[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<KunjunganJual | null>(null);

  setItems(items: KunjunganJual[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: KunjunganJual | null): void {
    this.selectedItem.set(item);
  }
}
