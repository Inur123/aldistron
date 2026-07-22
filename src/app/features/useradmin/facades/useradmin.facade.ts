import { Injectable } from '@angular/core';
import { UseradminRepository } from '../repositories/useradmin.repository';
import { UseradminStore } from './useradmin.store';
import { Useradmin } from '../models/useradmin.model';

@Injectable({
  providedIn: 'root'
})
export class UseradminFacade {
  constructor(
    private repository: UseradminRepository,
    private store: UseradminStore
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
    this.repository.getUseradmins().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Useradmin | null): void {
    this.store.setSelectedItem(item);
  }
}
