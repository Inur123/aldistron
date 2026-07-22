import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VendorService } from '../services/vendor.service';
import { Vendor } from '../models/vendor.model';
import { VendorMapper } from './vendor.mapper';

@Injectable({
  providedIn: 'root'
})
export class VendorRepository {
  constructor(private vendorService: VendorService) {}

  getVendors(): Observable<Vendor[]> {
    return this.vendorService.getVendors().pipe(
      map(dtos => VendorMapper.toModelList(dtos))
    );
  }
}
