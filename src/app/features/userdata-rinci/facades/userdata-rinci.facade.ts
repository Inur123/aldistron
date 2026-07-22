import { Injectable } from '@angular/core';
import { UserdataRinciRepository } from '../repositories/userdata-rinci.repository';
import { UserdataRinciStore } from './userdata-rinci.store';
import { UserdataRinci } from '../models/userdata-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataRinciFacade {
  constructor(
    private repository: UserdataRinciRepository,
    private store: UserdataRinciStore
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
    this.repository.getUserdataRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: UserdataRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
