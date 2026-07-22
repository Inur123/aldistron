import { Injectable } from '@angular/core';
import { HttpStatusRepository } from '../repositories/http-status.repository';
import { HttpStatusStore } from './http-status.store';
import { HttpStatus } from '../models/http-status.model';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusFacade {
  constructor(
    private repository: HttpStatusRepository,
    private store: HttpStatusStore
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
    this.repository.getHttpStatuss().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HttpStatus | null): void {
    this.store.setSelectedItem(item);
  }
}
