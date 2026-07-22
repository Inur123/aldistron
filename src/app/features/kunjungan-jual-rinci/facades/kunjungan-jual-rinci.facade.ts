import { Injectable } from '@angular/core';
import { KunjunganJualRinciRepository } from '../repositories/kunjungan-jual-rinci.repository';
import { KunjunganJualRinciStore } from './kunjungan-jual-rinci.store';
import { KunjunganJualRinci } from '../models/kunjungan-jual-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganJualRinciFacade {
  constructor(
    private repository: KunjunganJualRinciRepository,
    private store: KunjunganJualRinciStore
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
    this.repository.getKunjunganJualRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: KunjunganJualRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
