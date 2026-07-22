import { Injectable } from '@angular/core';
import { DropdownCustomRepository } from '../repositories/dropdown-custom.repository';
import { DropdownCustomStore } from './dropdown-custom.store';
import { DropdownCustom } from '../models/dropdown-custom.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownCustomFacade {
  constructor(
    private repository: DropdownCustomRepository,
    private store: DropdownCustomStore
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
    this.repository.getDropdownCustoms().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: DropdownCustom | null): void {
    this.store.setSelectedItem(item);
  }
}
