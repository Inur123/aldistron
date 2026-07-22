import { Injectable } from '@angular/core';
import { KunjunganSetorRepository } from '../repositories/kunjungan-setor.repository';
import { KunjunganSetorStore } from './kunjungan-setor.store';
import { KunjunganSetor } from '../models/kunjungan-setor.model';

@Injectable({
  providedIn: 'root'
})
export class KunjunganSetorFacade {
  constructor(
    private repository: KunjunganSetorRepository,
    private store: KunjunganSetorStore
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
    this.repository.getKunjunganSetors().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: KunjunganSetor | null): void {
    this.store.setSelectedItem(item);
  }
}
