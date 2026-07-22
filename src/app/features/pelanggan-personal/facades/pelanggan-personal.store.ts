import { Injectable, signal } from '@angular/core';
import { PelangganPersonal } from '../models/pelanggan-personal.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganPersonalStore {
  readonly items = signal<PelangganPersonal[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<PelangganPersonal | null>(null);

  setItems(items: PelangganPersonal[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: PelangganPersonal | null): void {
    this.selectedItem.set(item);
  }
}
