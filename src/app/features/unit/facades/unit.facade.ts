import { Injectable } from '@angular/core';
import { UnitRepository } from '../repositories/unit.repository';
import { UnitStore } from './unit.store';
import { Unit } from '../models/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitFacade {
  constructor(
    private repository: UnitRepository,
    private store: UnitStore
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
    this.repository.getUnits().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Unit | null): void {
    this.store.setSelectedItem(item);
  }
}
