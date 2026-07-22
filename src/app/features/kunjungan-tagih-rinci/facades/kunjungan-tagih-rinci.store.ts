import { Injectable, signal } from '@angular/core';
import { KunjunganTagihRinci } from '../models/kunjungan-tagih-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihRinciStore {
  readonly items = signal<KunjunganTagihRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<KunjunganTagihRinci | null>(null);

  setItems(items: KunjunganTagihRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: KunjunganTagihRinci | null): void {
    this.selectedItem.set(item);
  }
}
