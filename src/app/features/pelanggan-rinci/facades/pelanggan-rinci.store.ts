import { Injectable, signal } from '@angular/core';
import { PelangganRinci } from '../models/pelanggan-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganRinciStore {
  readonly items = signal<PelangganRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<PelangganRinci | null>(null);

  setItems(items: PelangganRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: PelangganRinci | null): void {
    this.selectedItem.set(item);
  }
}
