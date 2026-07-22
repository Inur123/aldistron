import { Injectable } from '@angular/core';
import { KunjunganTagihRinciRepository } from '../repositories/kunjungan-tagih-rinci.repository';
import { KunjunganTagihRinciStore } from './kunjungan-tagih-rinci.store';
import { KunjunganTagihRinci } from '../models/kunjungan-tagih-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihRinciFacade {
  constructor(
    private repository: KunjunganTagihRinciRepository,
    private store: KunjunganTagihRinciStore
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
    this.repository.getKunjunganTagihRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: KunjunganTagihRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
