import { Injectable, signal } from '@angular/core';
import { KunjunganTagihNoRute } from '../models/kunjungan-tagih-no-rute.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihNoRuteStore {
  readonly items = signal<KunjunganTagihNoRute[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<KunjunganTagihNoRute | null>(null);

  setItems(items: KunjunganTagihNoRute[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: KunjunganTagihNoRute | null): void {
    this.selectedItem.set(item);
  }
}
