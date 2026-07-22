import { Injectable, signal } from '@angular/core';
import { Vendor } from '../models/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorStore {
  readonly vendors = signal<Vendor[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedVendor = signal<Vendor | null>(null);

  setVendors(vendors: Vendor[]): void {
    this.vendors.set(vendors);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedVendor(vendor: Vendor | null): void {
    this.selectedVendor.set(vendor);
  }
}
