import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProdukKompetitorDto } from '../models/produk-kompetitor.dto';

@Injectable({
  providedIn: 'root'
})
export class ProdukKompetitorService {
  getKompetitors(): Observable<ProdukKompetitorDto[]> {
    return of([
      {
        id: 1,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_cabang: 1,
        id_userdata: 10,
        nama_administrator: 'Admin QA',
        email_administrator: 'qa@aldistron.com',
        jenis_produk: 'Barang',
        nama_produk: 'Produk Pesaing X',
        produsen_produk: 'PT Kompetitor Utama',
        alamat_produsen: 'Jakarta Industrial Estate',
        konversi_produk: '1 Pcs',
        barcode_produk: '999888777666',
        gambar_produk: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
        keterangan_produk: 'Pembanding harga pasar',
        created_at: '2026-07-22T08:00:00Z'
      }
    ]);
  }
}
