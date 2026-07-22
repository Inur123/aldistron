import { Injectable } from '@angular/core';
import { KabarPasarRepository } from '../repositories/kabar-pasar.repository';
import { KabarPasarStore } from './kabar-pasar.store';
import { KabarPasar } from '../models/kabar-pasar.model';

@Injectable({
  providedIn: 'root'
})
export class KabarPasarFacade {
  constructor(
    private repository: KabarPasarRepository,
    private store: KabarPasarStore
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
    this.repository.getKabarPasars().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: KabarPasar | null): void {
    this.store.setSelectedItem(item);
  }
}
