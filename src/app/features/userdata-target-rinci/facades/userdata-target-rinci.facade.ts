import { Injectable } from '@angular/core';
import { UserdataTargetRinciRepository } from '../repositories/userdata-target-rinci.repository';
import { UserdataTargetRinciStore } from './userdata-target-rinci.store';
import { UserdataTargetRinci } from '../models/userdata-target-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataTargetRinciFacade {
  constructor(
    private repository: UserdataTargetRinciRepository,
    private store: UserdataTargetRinciStore
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
    this.repository.getUserdataTargetRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: UserdataTargetRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
