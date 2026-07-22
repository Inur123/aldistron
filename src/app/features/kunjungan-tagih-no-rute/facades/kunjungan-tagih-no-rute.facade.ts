import { Injectable } from '@angular/core';
import { KunjunganTagihNoRuteRepository } from '../repositories/kunjungan-tagih-no-rute.repository';
import { KunjunganTagihNoRuteStore } from './kunjungan-tagih-no-rute.store';
import { KunjunganTagihNoRute } from '../models/kunjungan-tagih-no-rute.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganTagihNoRuteFacade {
  constructor(
    private repository: KunjunganTagihNoRuteRepository,
    private store: KunjunganTagihNoRuteStore
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
    this.repository.getKunjunganTagihNoRutes().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: KunjunganTagihNoRute | null): void {
    this.store.setSelectedItem(item);
  }
}
