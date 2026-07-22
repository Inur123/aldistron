import { Injectable } from '@angular/core';
import { KunjunganRepository } from '../repositories/kunjungan.repository';
import { KunjunganStore } from './kunjungan.store';
import { Kunjungan } from '../models/kunjungan.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganFacade {
  constructor(
    private repository: KunjunganRepository,
    private store: KunjunganStore
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
    this.repository.getKunjungans().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Kunjungan | null): void {
    this.store.setSelectedItem(item);
  }
}
