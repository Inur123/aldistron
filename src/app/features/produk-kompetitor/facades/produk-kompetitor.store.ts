import { Injectable, signal } from '@angular/core';
import { ProdukKompetitor } from '../models/produk-kompetitor.model';

@Injectable({
  providedIn: 'root'
})
export class ProdukKompetitorStore {
  readonly items = signal<ProdukKompetitor[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<ProdukKompetitor | null>(null);

  setItems(items: ProdukKompetitor[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: ProdukKompetitor | null): void {
    this.selectedItem.set(item);
  }
}
