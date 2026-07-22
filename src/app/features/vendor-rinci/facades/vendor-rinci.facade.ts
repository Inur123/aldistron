import { Injectable } from '@angular/core';
import { VendorRinciRepository } from '../repositories/vendor-rinci.repository';
import { VendorRinciStore } from './vendor-rinci.store';
import { VendorRinci } from '../models/vendor-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class VendorRinciFacade {
  constructor(
    private repository: VendorRinciRepository,
    private store: VendorRinciStore
  ) {}

  get vendorRincis() {
    return this.store.vendorRincis;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedVendorRinci() {
    return this.store.selectedVendorRinci;
  }

  loadVendorRincis(): void {
    this.store.setLoading(true);
    this.repository.getVendorRincis().subscribe({
      next: (data) => {
        this.store.setVendorRincis(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectVendorRinci(vendorRinci: VendorRinci | null): void {
    this.store.setSelectedVendorRinci(vendorRinci);
  }
}
