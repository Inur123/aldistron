import { Injectable } from '@angular/core';
import { UserdataRepository } from '../repositories/userdata.repository';
import { UserdataStore } from './userdata.store';
import { Userdata } from '../models/userdata.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataFacade {
  constructor(
    private repository: UserdataRepository,
    private store: UserdataStore
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
    this.repository.getUserdatas().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Userdata | null): void {
    this.store.setSelectedItem(item);
  }
}
