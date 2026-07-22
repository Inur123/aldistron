import { Injectable } from '@angular/core';
import { UserdataTargetRepository } from '../repositories/userdata-target.repository';
import { UserdataTargetStore } from './userdata-target.store';
import { UserdataTarget } from '../models/userdata-target.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataTargetFacade {
  constructor(
    private repository: UserdataTargetRepository,
    private store: UserdataTargetStore
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
    this.repository.getUserdataTargets().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: UserdataTarget | null): void {
    this.store.setSelectedItem(item);
  }
}
