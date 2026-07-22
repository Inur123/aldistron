import { Injectable, signal } from '@angular/core';
import { KunjunganSetor } from '../models/kunjungan-setor.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganSetorStore {
  readonly items = signal<KunjunganSetor[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<KunjunganSetor | null>(null);

  setItems(items: KunjunganSetor[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: KunjunganSetor | null): void {
    this.selectedItem.set(item);
  }
}
