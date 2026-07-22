import { Injectable, signal } from '@angular/core';
import { HistorystokRinci } from '../models/historystok-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HistorystokRinciStore {
  readonly items = signal<HistorystokRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HistorystokRinci | null>(null);

  setItems(items: HistorystokRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HistorystokRinci | null): void {
    this.selectedItem.set(item);
  }
}
