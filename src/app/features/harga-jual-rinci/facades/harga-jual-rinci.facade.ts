import { Injectable } from '@angular/core';
import { HargaJualRinciRepository } from '../repositories/harga-jual-rinci.repository';
import { HargaJualRinciStore } from './harga-jual-rinci.store';
import { HargaJualRinci } from '../models/harga-jual-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HargaJualRinciFacade {
  constructor(
    private repository: HargaJualRinciRepository,
    private store: HargaJualRinciStore
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
    this.repository.getHargaJualRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaJualRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
