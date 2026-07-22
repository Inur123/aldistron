import { Injectable } from '@angular/core';
import { KunjunganTagihRepository } from '../repositories/kunjungan-tagih.repository';
import { KunjunganTagihStore } from './kunjungan-tagih.store';
import { KunjunganTagih } from '../models/kunjungan-tagih.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihFacade {
  constructor(
    private repository: KunjunganTagihRepository,
    private store: KunjunganTagihStore
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
    this.repository.getKunjunganTagihs().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: KunjunganTagih | null): void {
    this.store.setSelectedItem(item);
  }
}
