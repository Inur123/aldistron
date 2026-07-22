import { Injectable } from '@angular/core';
import { VendorRepository } from '../repositories/vendor.repository';
import { VendorStore } from './vendor.store';
import { Vendor } from '../models/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorFacade {
  constructor(
    private repository: VendorRepository,
    private store: VendorStore
  ) {}

  get vendors() {
    return this.store.vendors;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedVendor() {
    return this.store.selectedVendor;
  }

  loadVendors(): void {
    this.store.setLoading(true);
    this.repository.getVendors().subscribe({
      next: (data) => {
        this.store.setVendors(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectVendor(vendor: Vendor | null): void {
    this.store.setSelectedVendor(vendor);
  }
}
