import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VendorRinciService } from '../services/vendor-rinci.service';
import { VendorRinci } from '../models/vendor-rinci.model';
import { VendorRinciMapper } from './vendor-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class VendorRinciRepository {
  constructor(private service: VendorRinciService) {}

  getVendorRincis(): Observable<VendorRinci[]> {
    return this.service.getVendorRincis().pipe(
      map(dtos => VendorRinciMapper.toModelList(dtos))
    );
  }
}
