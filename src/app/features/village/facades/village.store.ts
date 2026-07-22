import { Injectable, signal } from '@angular/core';
import { Village } from '../models/village.model';

@Injectable({
  providedIn: 'root'
})
export class VillageStore {
  readonly items = signal<Village[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Village | null>(null);

  setItems(items: Village[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Village | null): void {
    this.selectedItem.set(item);
  }
}
