import { Injectable } from '@angular/core';
import { KunjunganJualRepository } from '../repositories/kunjungan-jual.repository';
import { KunjunganJualStore } from './kunjungan-jual.store';
import { KunjunganJual } from '../models/kunjungan-jual.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganJualFacade {
  constructor(
    private repository: KunjunganJualRepository,
    private store: KunjunganJualStore
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
    this.repository.getKunjunganJuals().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: KunjunganJual | null): void {
    this.store.setSelectedItem(item);
  }
}
