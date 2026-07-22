import { Injectable } from '@angular/core';
import { InfoGlobalRepository } from '../repositories/info-global.repository';
import { InfoGlobalStore } from './info-global.store';
import { InfoGlobal } from '../models/info-global.model';

@Injectable({
  providedIn: 'root'
})
export class InfoGlobalFacade {
  constructor(
    private repository: InfoGlobalRepository,
    private store: InfoGlobalStore
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
    this.repository.getInfoGlobals().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: InfoGlobal | null): void {
    this.store.setSelectedItem(item);
  }
}
