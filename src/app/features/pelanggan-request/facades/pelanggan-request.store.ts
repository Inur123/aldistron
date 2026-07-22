import { Injectable, signal } from '@angular/core';
import { PelangganRequest } from '../models/pelanggan-request.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganRequestStore {
  readonly items = signal<PelangganRequest[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<PelangganRequest | null>(null);

  setItems(items: PelangganRequest[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: PelangganRequest | null): void {
    this.selectedItem.set(item);
  }
}
