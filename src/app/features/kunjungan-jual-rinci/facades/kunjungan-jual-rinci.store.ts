import { Injectable, signal } from '@angular/core';
import { KunjunganJualRinci } from '../models/kunjungan-jual-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganJualRinciStore {
  readonly items = signal<KunjunganJualRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<KunjunganJualRinci | null>(null);

  setItems(items: KunjunganJualRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: KunjunganJualRinci | null): void {
    this.selectedItem.set(item);
  }
}
