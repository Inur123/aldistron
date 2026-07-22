import { Injectable } from '@angular/core';
import { DropdownListRepository } from '../repositories/dropdown-list.repository';
import { DropdownListStore } from './dropdown-list.store';
import { DropdownList } from '../models/dropdown-list.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownListFacade {
  constructor(
    private repository: DropdownListRepository,
    private store: DropdownListStore
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
    this.repository.getDropdownLists().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: DropdownList | null): void {
    this.store.setSelectedItem(item);
  }
}
