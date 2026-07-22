import { Injectable } from '@angular/core';
import { HargaDiskonProdukRepository } from '../repositories/harga-diskon-produk.repository';
import { HargaDiskonProdukStore } from './harga-diskon-produk.store';
import { HargaDiskonProduk } from '../models/harga-diskon-produk.model';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonProdukFacade {
  constructor(
    private repository: HargaDiskonProdukRepository,
    private store: HargaDiskonProdukStore
  ) {}

  get items() {
    return this.store.items;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedItem() {
    return this.store.selectedItem;
  }

  loadItems(): void {
    this.store.setLoading(true);
    this.repository.getHargaDiskonProduks().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaDiskonProduk | null): void {
    this.store.setSelectedItem(item);
  }
}
