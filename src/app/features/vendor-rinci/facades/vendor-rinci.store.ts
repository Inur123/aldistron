import { Injectable, signal } from '@angular/core';
import { VendorRinci } from '../models/vendor-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class VendorRinciStore {
  readonly vendorRincis = signal<VendorRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedVendorRinci = signal<VendorRinci | null>(null);

  setVendorRincis(vendorRincis: VendorRinci[]): void {
    this.vendorRincis.set(vendorRincis);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedVendorRinci(vendorRinci: VendorRinci | null): void {
    this.selectedVendorRinci.set(vendorRinci);
  }
}
