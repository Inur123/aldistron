import { Injectable, signal } from '@angular/core';
import { PelangganKategori } from '../models/pelanggan-kategori.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganKategoriStore {
  readonly items = signal<PelangganKategori[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<PelangganKategori | null>(null);

  setItems(items: PelangganKategori[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: PelangganKategori | null): void {
    this.selectedItem.set(item);
  }
}
