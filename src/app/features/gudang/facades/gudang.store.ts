import { Injectable, signal } from '@angular/core';
import { Gudang } from '../models/gudang.model';

@Injectable({
  providedIn: 'root'
})
export class GudangStore {
  readonly items = signal<Gudang[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Gudang | null>(null);

  setItems(items: Gudang[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Gudang | null): void {
    this.selectedItem.set(item);
  }
}
