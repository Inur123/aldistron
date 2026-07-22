import { Injectable } from '@angular/core';
import { HargaDiskonRepository } from '../repositories/harga-diskon.repository';
import { HargaDiskonStore } from './harga-diskon.store';
import { HargaDiskon } from '../models/harga-diskon.model';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonFacade {
  constructor(
    private repository: HargaDiskonRepository,
    private store: HargaDiskonStore
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
    this.repository.getHargaDiskons().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaDiskon | null): void {
    this.store.setSelectedItem(item);
  }
}
