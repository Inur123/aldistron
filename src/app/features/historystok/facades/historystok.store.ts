import { Injectable, signal } from '@angular/core';
import { Historystok } from '../models/historystok.model';

@Injectable({
  providedIn: 'root'
})
export class HistorystokStore {
  readonly items = signal<Historystok[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Historystok | null>(null);

  setItems(items: Historystok[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Historystok | null): void {
    this.selectedItem.set(item);
  }
}
