import { Injectable } from '@angular/core';
import { ProdukKompetitorRepository } from '../repositories/produk-kompetitor.repository';
import { ProdukKompetitorStore } from './produk-kompetitor.store';
import { ProdukKompetitor } from '../models/produk-kompetitor.model';

@Injectable({
  providedIn: 'root'
})
export class ProdukKompetitorFacade {
  constructor(
    private repository: ProdukKompetitorRepository,
    private store: ProdukKompetitorStore
  ) {}

  get kompetitors() {
    return this.store.items;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedKompetitor() {
    return this.store.selectedItem;
  }

  loadKompetitors(): void {
    this.store.setLoading(true);
    this.repository.getKompetitors().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectKompetitor(kompetitor: ProdukKompetitor | null): void {
    this.store.setSelectedItem(kompetitor);
  }
}
