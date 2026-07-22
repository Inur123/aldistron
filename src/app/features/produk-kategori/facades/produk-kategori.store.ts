import { Injectable, signal } from '@angular/core';
import { ProdukKategori } from '../models/produk-kategori.model';

@Injectable({
  providedIn: 'root'
})
export class ProdukKategoriStore {
  readonly items = signal<ProdukKategori[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<ProdukKategori | null>(null);

  setItems(items: ProdukKategori[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: ProdukKategori | null): void {
    this.selectedItem.set(item);
  }
}
