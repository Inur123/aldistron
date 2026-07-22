import { Injectable } from '@angular/core';
import { SiteLogRepository } from '../repositories/site-log.repository';
import { SiteLogStore } from './site-log.store';
import { SiteLog } from '../models/site-log.model';

@Injectable({
  providedIn: 'root'
})
export class SiteLogFacade {
  constructor(
    private repository: SiteLogRepository,
    private store: SiteLogStore
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
    this.repository.getSiteLogs().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: SiteLog | null): void {
    this.store.setSelectedItem(item);
  }
}
