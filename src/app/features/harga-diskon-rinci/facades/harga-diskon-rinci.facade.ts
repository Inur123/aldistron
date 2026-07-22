import { Injectable } from '@angular/core';
import { HargaDiskonRinciRepository } from '../repositories/harga-diskon-rinci.repository';
import { HargaDiskonRinciStore } from './harga-diskon-rinci.store';
import { HargaDiskonRinci } from '../models/harga-diskon-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonRinciFacade {
  constructor(
    private repository: HargaDiskonRinciRepository,
    private store: HargaDiskonRinciStore
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
    this.repository.getHargaDiskonRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaDiskonRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
