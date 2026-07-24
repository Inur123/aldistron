import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HargaPaketDto } from '../models/harga-paket.dto';
import { HargaPaketRinciDto } from '../../harga-paket-rinci/models/harga-paket-rinci.dto';

export interface HargaPaketCombined extends HargaPaketDto {
  hargapaketrincis: (HargaPaketRinciDto & {
    nama_produk_utama?: string;
    nama_produk_paket?: string;
  })[];
}

@Injectable({
  providedIn: 'root'
})
export class HargaPaketService {
  private items: HargaPaketCombined[] = [
    {
      id: 1,
      id_aoldatabase: 1,
      id_aoldb: 1,
      id_cabang: 1,
      nama_hargapaket: 'Paket Bundling Hemat Workstation 2026',
      keterangan_hargapaket: 'Beli 1 Laptop Gaming gratis Monitor External 24 inch',
      aktif_hargapaket: true,
      awal_hargapaket: '2026-08-01',
      akhir_hargapaket: '2026-12-31',
      tipe_alokasi_hargapaket: 'All Cabang',
      created_at: '2026-07-24T08:00:00Z',
      hargapaketrincis: [
        {
          id: 301,
          id_hargapaket: 1,
          id_produk_utama: 1,
          qty_produk_utama: 1,
          id_unit_produk_utama: 1,
          id_produk_paket: 2,
          qty_produk_paket: 1,
          id_unit_produk_paket: 1,
          kelipatan_paket: true,
          nama_produk_utama: 'Laptop Gaming ROG Strix G16',
          nama_produk_paket: 'Monitor Gaming Asus TUF 24 Inch',
          created_at: '2026-07-24T08:05:00Z'
        }
      ]
    }
  ];

  getHargaPakets(): Observable<HargaPaketCombined[]> {
    return of([...this.items]);
  }

  addHargaPaket(newItem: Omit<HargaPaketDto, 'id'>): Observable<HargaPaketCombined> {
    const created: HargaPaketCombined = {
      ...newItem,
      id: Date.now(),
      hargapaketrincis: []
    };
    this.items.unshift(created);
    return of(created);
  }

  addHargaPaketRinci(
    idHargaPaket: number, 
    namaProdukUtama: string,
    namaProdukPaket: string,
    rinciData: Omit<HargaPaketRinciDto, 'id' | 'id_hargapaket'>
  ): Observable<void> {
    const parent = this.items.find(i => i.id === idHargaPaket);
    if (parent) {
      parent.hargapaketrincis.push({
        ...rinciData,
        id: Date.now(),
        id_hargapaket: idHargaPaket,
        nama_produk_utama: namaProdukUtama,
        nama_produk_paket: namaProdukPaket
      });
    }
    return of(undefined);
  }

  deleteHargaPaket(id: number): Observable<void> {
    this.items = this.items.filter(i => i.id !== id);
    return of(undefined);
  }
}
