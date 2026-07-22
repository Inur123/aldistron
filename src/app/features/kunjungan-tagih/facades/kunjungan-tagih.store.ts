import { Injectable, signal } from '@angular/core';
import { KunjunganTagih } from '../models/kunjungan-tagih.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihStore {
  readonly items = signal<KunjunganTagih[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<KunjunganTagih | null>(null);

  setItems(items: KunjunganTagih[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: KunjunganTagih | null): void {
    this.selectedItem.set(item);
  }
}
