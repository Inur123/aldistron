import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HargaDiskonProdukService } from '../services/harga-diskon-produk.service';
import { HargaDiskonProduk } from '../models/harga-diskon-produk.model';
import { HargaDiskonProdukMapper } from './harga-diskon-produk.mapper';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonProdukRepository {
  constructor(private service: HargaDiskonProdukService) {}

  getHargaDiskonProduks(): Observable<HargaDiskonProduk[]> {
    return this.service.getHargaDiskonProduks().pipe(
      map(dtos => HargaDiskonProdukMapper.toModelList(dtos))
    );
  }
}
