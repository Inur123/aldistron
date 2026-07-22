import { Injectable } from '@angular/core';
import { PelangganRequestRepository } from '../repositories/pelanggan-request.repository';
import { PelangganRequestStore } from './pelanggan-request.store';
import { PelangganRequest } from '../models/pelanggan-request.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganRequestFacade {
  constructor(
    private repository: PelangganRequestRepository,
    private store: PelangganRequestStore
  ) {}

  get requests() {
    return this.store.items;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedItem() {
    return this.store.selectedItem;
  }

  loadRequests(): void {
    this.store.setLoading(true);
    this.repository.getRequests().subscribe({
      next: (data: PelangganRequest[]) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: PelangganRequest | null): void {
    this.store.setSelectedItem(item);
  }
}
