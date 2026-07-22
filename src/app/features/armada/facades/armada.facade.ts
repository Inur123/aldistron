import { Injectable } from '@angular/core';
import { ArmadaRepository } from '../repositories/armada.repository';
import { ArmadaStore } from './armada.store';
import { Armada } from '../models/armada.model';

@Injectable({
  providedIn: 'root'
})
export class ArmadaFacade {
  constructor(
    private repository: ArmadaRepository,
    private store: ArmadaStore
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
    this.repository.getArmadas().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Armada | null): void {
    this.store.setSelectedItem(item);
  }
}
