import { Injectable, signal } from '@angular/core';
import { KlaimBiaya } from '../models/klaim-biaya.model';

@Injectable({
  providedIn: 'root'
})
export class KlaimBiayaStore {
  readonly items = signal<KlaimBiaya[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<KlaimBiaya | null>(null);

  setItems(items: KlaimBiaya[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: KlaimBiaya | null): void {
    this.selectedItem.set(item);
  }
}
