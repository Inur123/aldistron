import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HargaPromoDto } from '../models/harga-promo.dto';
import { HargaPromoProdukDto } from '../../harga-promo-produk/models/harga-promo-produk.dto';
import { HargaPromoRinciDto } from '../../harga-promo-rinci/models/harga-promo-rinci.dto';

export interface HargaPromoCombined extends HargaPromoDto {
  hargapromoproduks: (HargaPromoProdukDto & {
    hargapromorincis: HargaPromoRinciDto[];
  })[];
}

@Injectable({
  providedIn: 'root'
})
export class HargaPromoService {
  private items: HargaPromoCombined[] = [
    {
      id: 1,
      id_aoldatabase: 1,
      id_aoldb: 1,
      id_cabang: 1,
      nama_hargapromo: 'Promo Bundle Gaming Strix 2026',
      keterangan_hargapromo: 'Beli laptop gaming bonus mousepad & backpack original',
      aktif_hargapromo: true,
      awal_hargapromo: '2026-08-01',
      akhir_hargapromo: '2026-08-31',
      tipe_alokasi_hargapromo: 'All Cabang',
      created_at: '2026-07-24T08:00:00Z',
      hargapromoproduks: [
        {
          id: 201,
          id_hargapromo: 1,
          id_produk: 1,
          nama_produk_hargapromo: 'Laptop Gaming ROG Strix G16',
          include_max: true,
          created_at: '2026-07-24T08:05:00Z',
          hargapromorincis: [
            {
              id: 2001,
              id_hargapromo_produk: 201,
              id_produk_hargapromo: 1,
              id_unit_hargapromo: 1,
              nama_unit_hargapromo: 'Unit',
              min_qty_hargapromo: 1,
              max_qty_hargapromo: 5,
              id_produk_bonus: 10,
              nama_produk_bonus: 'ROG Gaming Mousepad RGB',
              qty_bonus: 1,
              id_unit_bonus: 1,
              nilai_bonus: 350000,
              created_at: '2026-07-24T08:10:00Z'
            }
          ]
        }
      ]
    }
  ];

  getHargaPromos(): Observable<HargaPromoCombined[]> {
    return of([...this.items]);
  }

  addHargaPromo(newItem: Omit<HargaPromoDto, 'id'>): Observable<HargaPromoCombined> {
    const created: HargaPromoCombined = {
      ...newItem,
      id: Date.now(),
      hargapromoproduks: []
    };
    this.items.unshift(created);
    return of(created);
  }

  addProdukPromoWithRinci(
    idHargaPromo: number, 
    namaProduk: string, 
    rinciData: Omit<HargaPromoRinciDto, 'id' | 'id_hargapromo_produk'>
  ): Observable<void> {
    const parent = this.items.find(i => i.id === idHargaPromo);
    if (parent) {
      const prodId = Date.now();
      parent.hargapromoproduks.push({
        id: prodId,
        id_hargapromo: idHargaPromo,
        id_produk: prodId,
        nama_produk_hargapromo: namaProduk,
        include_max: true,
        created_at: new Date().toISOString(),
        hargapromorincis: [
          {
            ...rinciData,
            id: prodId + 1,
            id_hargapromo_produk: prodId
          }
        ]
      });
    }
    return of(undefined);
  }

  deleteHargaPromo(id: number): Observable<void> {
    this.items = this.items.filter(i => i.id !== id);
    return of(undefined);
  }
}
