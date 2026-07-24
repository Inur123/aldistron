import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HargaMomenDto } from '../models/harga-momen.dto';
import { HargaMomenRinciDto } from '../../harga-momen-rinci/models/harga-momen-rinci.dto';

export interface HargaMomenCombined extends HargaMomenDto {
  hargamomenrincis: (HargaMomenRinciDto & {
    nama_produk?: string;
  })[];
}

@Injectable({
  providedIn: 'root'
})
export class HargaMomenService {
  private items: HargaMomenCombined[] = [
    {
      id: 1,
      id_aoldatabase: 1,
      id_aoldb: 1,
      id_cabang: 1,
      nama_hargamomen: 'Promo Special Harbolnas 11.11 & Year-End Sale',
      keterangan_hargamomen: 'Diskon kilat dan ekstra poin reward momen belanja nasional',
      aktif_hargamomen: true,
      awal_hargamomen: '2026-11-11',
      akhir_hargamomen: '2026-11-15',
      tipe_alokasi_hargamomen: 'All Cabang',
      created_at: '2026-07-24T08:00:00Z',
      hargamomenrincis: [
        {
          id: 401,
          id_hargamomen: 1,
          tipe_momen: 'Flash Sale Harbolnas',
          total_momen: 100,
          potongan_rupiah: 500000,
          potongan_persen: 0,
          id_produk_hargamomen: 1,
          qty_produk_hargamomen: 1,
          id_unit_produk_hargamomen: 1,
          poin_hargamomen: 500,
          nama_produk: 'Laptop Gaming ROG Strix G16',
          created_at: '2026-07-24T08:05:00Z'
        }
      ]
    }
  ];

  getHargaMomens(): Observable<HargaMomenCombined[]> {
    return of([...this.items]);
  }

  addHargaMomen(newItem: Omit<HargaMomenDto, 'id'>): Observable<HargaMomenCombined> {
    const created: HargaMomenCombined = {
      ...newItem,
      id: Date.now(),
      hargamomenrincis: []
    };
    this.items.unshift(created);
    return of(created);
  }

  addHargaMomenRinci(
    idHargaMomen: number, 
    namaProduk: string, 
    rinciData: Omit<HargaMomenRinciDto, 'id' | 'id_hargamomen'>
  ): Observable<void> {
    const parent = this.items.find(i => i.id === idHargaMomen);
    if (parent) {
      parent.hargamomenrincis.push({
        ...rinciData,
        id: Date.now(),
        id_hargamomen: idHargaMomen,
        nama_produk: namaProduk
      });
    }
    return of(undefined);
  }

  deleteHargaMomen(id: number): Observable<void> {
    this.items = this.items.filter(i => i.id !== id);
    return of(undefined);
  }
}
