import { Injectable, signal } from '@angular/core';
import { Regency } from '../models/regency.model';

@Injectable({
  providedIn: 'root'
})
export class RegencyStore {
  readonly items = signal<Regency[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Regency | null>(null);

  setItems(items: Regency[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Regency | null): void {
    this.selectedItem.set(item);
  }
}
