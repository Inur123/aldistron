import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HargaDiskonDto } from '../models/harga-diskon.dto';
import { HargaDiskonProdukDto } from '../../harga-diskon-produk/models/harga-diskon-produk.dto';
import { HargaDiskonRinciDto } from '../../harga-diskon-rinci/models/harga-diskon-rinci.dto';

export interface HargaDiskonCombined extends HargaDiskonDto {
  hargadiskonproduks: (HargaDiskonProdukDto & {
    hargadiskonrincis: HargaDiskonRinciDto[];
  })[];
}

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonService {
  private items: HargaDiskonCombined[] = [
    {
      id: 1,
      id_aoldatabase: 1,
      id_aoldb: 1,
      id_cabang: 1,
      nama_hargadiskon: 'Promo Diskon Merdeka 2026',
      keterangan_hargadiskon: 'Program potongan khusus produk elektronik kuartal 3',
      aktif_hargadiskon: true,
      awal_hargadiskon: '2026-08-01',
      akhir_hargadiskon: '2026-08-31',
      tipe_alokasi_hargadiskon: 'All Cabang',
      created_at: '2026-07-24T08:00:00Z',
      hargadiskonproduks: [
        {
          id: 101,
          id_hargadiskon: 1,
          id_produk: 1,
          nama_produk_hargadiskon: 'Laptop Gaming ROG Strix G16',
          created_at: '2026-07-24T08:05:00Z',
          hargadiskonrincis: [
            {
              id: 1001,
              id_hargadiskon_produk: 101,
              id_produk_hargadiskon: 1,
              id_unit_hargadiskon: 1,
              nama_unit_hargadiskon: 'Unit',
              diskon_tipe: 'rupiah',
              min_qty_hargadiskon: 1,
              max_qty_hargadiskon: 5,
              diskon_rupiah: 500000,
              diskon_persen: 0,
              created_at: '2026-07-24T08:10:00Z'
            },
            {
              id: 1002,
              id_hargadiskon_produk: 101,
              id_produk_hargadiskon: 1,
              id_unit_hargadiskon: 1,
              nama_unit_hargadiskon: 'Unit',
              diskon_tipe: 'persen',
              min_qty_hargadiskon: 6,
              max_qty_hargadiskon: 20,
              diskon_rupiah: 0,
              diskon_persen: 10,
              created_at: '2026-07-24T08:12:00Z'
            }
          ]
        }
      ]
    }
  ];

  getHargaDiskons(): Observable<HargaDiskonCombined[]> {
    return of([...this.items]);
  }

  addHargaDiskon(newItem: Omit<HargaDiskonDto, 'id'>): Observable<HargaDiskonCombined> {
    const created: HargaDiskonCombined = {
      ...newItem,
      id: Date.now(),
      hargadiskonproduks: []
    };
    this.items.unshift(created);
    return of(created);
  }

  addHargaDiskonWithProduk(newItem: Omit<HargaDiskonDto, 'id'>, selectedProducts: string[]): Observable<HargaDiskonCombined> {
    const diskonId = Date.now();
    const produks = selectedProducts.map((pName, index) => ({
      id: diskonId + index + 1,
      id_hargadiskon: diskonId,
      id_produk: diskonId + index + 10,
      nama_produk_hargadiskon: pName,
      created_at: new Date().toISOString(),
      hargadiskonrincis: []
    }));

    const created: HargaDiskonCombined = {
      ...newItem,
      id: diskonId,
      hargadiskonproduks: produks
    };
    this.items.unshift(created);
    return of(created);
  }

  addProdukDiskon(idHargaDiskon: number, namaProduk: string): Observable<void> {
    const parent = this.items.find(i => i.id === idHargaDiskon);
    if (parent) {
      parent.hargadiskonproduks.push({
        id: Date.now(),
        id_hargadiskon: idHargaDiskon,
        id_produk: Date.now(),
        nama_produk_hargadiskon: namaProduk,
        created_at: new Date().toISOString(),
        hargadiskonrincis: []
      });
    }
    return of(undefined);
  }

  addProdukDiskonWithRinci(
    idHargaDiskon: number, 
    namaProduk: string, 
    rinciData: Omit<HargaDiskonRinciDto, 'id' | 'id_hargadiskon_produk'>
  ): Observable<void> {
    const parent = this.items.find(i => i.id === idHargaDiskon);
    if (parent) {
      const prodId = Date.now();
      parent.hargadiskonproduks.push({
        id: prodId,
        id_hargadiskon: idHargaDiskon,
        id_produk: prodId,
        nama_produk_hargadiskon: namaProduk,
        created_at: new Date().toISOString(),
        hargadiskonrincis: [
          {
            ...rinciData,
            id: prodId + 1,
            id_hargadiskon_produk: prodId
          }
        ]
      });
    }
    return of(undefined);
  }

  addDiskonRinci(idProdukDiskon: number, rinciData: Omit<HargaDiskonRinciDto, 'id' | 'id_hargadiskon_produk'>): Observable<void> {
    for (const item of this.items) {
      const prod = item.hargadiskonproduks.find(p => p.id === idProdukDiskon);
      if (prod) {
        prod.hargadiskonrincis.push({
          ...rinciData,
          id: Date.now(),
          id_hargadiskon_produk: idProdukDiskon
        });
        break;
      }
    }
    return of(undefined);
  }

  deleteHargaDiskon(id: number): Observable<void> {
    this.items = this.items.filter(i => i.id !== id);
    return of(undefined);
  }

  deleteProdukDiskon(idProdukDiskon: number): Observable<void> {
    for (const item of this.items) {
      item.hargadiskonproduks = item.hargadiskonproduks.filter(p => p.id !== idProdukDiskon);
    }
    return of(undefined);
  }

  deleteDiskonRinci(idRinci: number): Observable<void> {
    for (const item of this.items) {
      for (const prod of item.hargadiskonproduks) {
        prod.hargadiskonrincis = prod.hargadiskonrincis.filter(r => r.id !== idRinci);
      }
    }
    return of(undefined);
  }
}
