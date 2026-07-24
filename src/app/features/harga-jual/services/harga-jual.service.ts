import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HargaJualDto } from '../models/harga-jual.dto';
import { HargaJualRinciDto } from '../../harga-jual-rinci/models/harga-jual-rinci.dto';

export interface HargaJualCombined extends HargaJualDto {
  hargajualrincis: (HargaJualRinciDto & {
    nama_produk?: string;
    nama_unit?: string;
  })[];
}

@Injectable({
  providedIn: 'root'
})
export class HargaJualService {
  private items: HargaJualCombined[] = [
    {
      id: 1,
      id_aoldatabase: 1,
      id_aoldb: 1,
      id_cabang: 1,
      nama_hargajual: 'Penetapan Harga Jual Standar 2026',
      keterangan_hargajual: 'Daftar harga jual resmi toko HET, Retail & Wholesales',
      aktif_hargajual: true,
      awal_hargajual: '2026-01-01',
      akhir_hargajual: '2026-12-31',
      tipe_alokasi_hargajual: 'All Cabang',
      created_at: '2026-07-24T08:00:00Z',
      hargajualrincis: [
        {
          id: 101,
          id_hargajual: 1,
          id_produk: 1,
          id_unit: 1,
          nama_produk: 'Laptop Gaming ROG Strix G16',
          nama_unit: 'Unit',
          hargajual_het: 25000000,
          hargajual_retail: 24500000,
          hargajual_wo: 23500000,
          hargajual_so: 23000000,
          hargajual_custom: 22500000,
          hargajual_spesial: 22000000,
          created_at: '2026-07-24T08:05:00Z'
        }
      ]
    }
  ];

  getHargaJuals(): Observable<HargaJualCombined[]> {
    return of([...this.items]);
  }

  addHargaJual(newItem: Omit<HargaJualDto, 'id'>): Observable<HargaJualCombined> {
    const created: HargaJualCombined = {
      ...newItem,
      id: Date.now(),
      hargajualrincis: []
    };
    this.items.unshift(created);
    return of(created);
  }

  addHargaJualRinci(
    idHargaJual: number, 
    namaProduk: string, 
    rinciData: Omit<HargaJualRinciDto, 'id' | 'id_hargajual'>
  ): Observable<void> {
    const parent = this.items.find(i => i.id === idHargaJual);
    if (parent) {
      const rinciId = Date.now();
      parent.hargajualrincis.push({
        ...rinciData,
        id: rinciId,
        id_hargajual: idHargaJual,
        nama_produk: namaProduk
      });
    }
    return of(undefined);
  }

  deleteHargaJual(id: number): Observable<void> {
    this.items = this.items.filter(i => i.id !== id);
    return of(undefined);
  }

  deleteHargaJualRinci(idRinci: number): Observable<void> {
    for (const item of this.items) {
      item.hargajualrincis = item.hargajualrincis.filter(r => r.id !== idRinci);
    }
    return of(undefined);
  }
}
