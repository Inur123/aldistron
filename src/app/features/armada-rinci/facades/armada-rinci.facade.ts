import { Injectable } from '@angular/core';
import { ArmadaRinciRepository } from '../repositories/armada-rinci.repository';
import { ArmadaRinciStore } from './armada-rinci.store';
import { ArmadaRinci } from '../models/armada-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class ArmadaRinciFacade {
  constructor(
    private repository: ArmadaRinciRepository,
    private store: ArmadaRinciStore
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
    this.repository.getArmadaRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: ArmadaRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
