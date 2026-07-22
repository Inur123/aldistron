import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductDto } from '../models/product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<ProductDto[]> {
    const dummyDtos: ProductDto[] = [
      {
        id: 1,
        id_aoldatabase: 101,
        id_aoldb: 1,
        id_vendor: 5,
        id_produkbrand: 2,
        id_produkkategori: 10,
        id_aolprod: 501,
        nama_vendor_produk: 'PT Asus Indonesia',
        nama_brand_produk: 'ROG',
        nama_kategori_produk: 'Laptop',
        nomor_produk: 'PRD-001',
        nama_produk: 'Laptop Gaming ROG Strix G16',
        jenis_produk: 'Barang',
        barcode_produk: '899123456789',
        keterangan_produk: 'High performance gaming laptop',
        aktif_produk: true,
        konversi_unit1: 1,
        konversi_unit2: 0,
        konversi_unit3: 0,
        konversi_unit4: 0,
        konversi_unit5: 0,
        rasio_unit1: 1,
        rasio_unit2: 1,
        rasio_unit3: 1,
        rasio_unit4: 1,
        rasio_unit5: 1,
        gramasi_produk: 2500,
        panjang_produk_kecil: 35,
        lebar_produk_kecil: 25,
        tinggi_produk_kecil: 3,
        panjang_produk_besar: 45,
        lebar_produk_besar: 35,
        tinggi_produk_besar: 10,
        gambar_produk: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
        minim_beli_unit1: 1,
        minim_stok_unit1: 2,
        log_aolcat_id: 1,
        log_aolven_id: 1,
        created_at: '2026-07-22T08:00:00Z',
        updated_at: '2026-07-22T08:00:00Z',
        deleted_at: null
      }
    ];
    return of(dummyDtos);
  }
}
