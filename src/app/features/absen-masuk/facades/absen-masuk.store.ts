import { Injectable, signal } from '@angular/core';
import { AbsenMasuk } from '../models/absen-masuk.model';

@Injectable({
  providedIn: 'root'
})
export class AbsenMasukStore {
  readonly items = signal<AbsenMasuk[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<AbsenMasuk | null>(null);

  setItems(items: AbsenMasuk[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: AbsenMasuk | null): void {
    this.selectedItem.set(item);
  }
}
