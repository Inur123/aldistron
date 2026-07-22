export interface ProductDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_vendor: number | null;
  id_produkbrand: number | null;
  id_produkkategori: number | null;
  id_aolprod: number | null;
  nama_vendor_produk: string;
  nama_brand_produk: string;
  nama_kategori_produk: string;
  nomor_produk: string;
  nama_produk: string;
  jenis_produk: string;
  barcode_produk: string;
  keterangan_produk: string;
  aktif_produk: boolean;
  konversi_unit1: number | null;
  konversi_unit2: number | null;
  konversi_unit3: number | null;
  konversi_unit4: number | null;
  konversi_unit5: number | null;
  rasio_unit1: number | null;
  rasio_unit2: number | null;
  rasio_unit3: number | null;
  rasio_unit4: number | null;
  rasio_unit5: number | null;
  gramasi_produk: number | null;
  panjang_produk_kecil: number | null;
  lebar_produk_kecil: number | null;
  tinggi_produk_kecil: number | null;
  panjang_produk_besar: number | null;
  lebar_produk_besar: number | null;
  tinggi_produk_besar: number | null;
  gambar_produk: string;
  minim_beli_unit1: number | null;
  minim_stok_unit1: number | null;
  log_aolcat_id: number | null;
  log_aolven_id: number | null;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}

// [REQUEST DTO] Query params buat GET /api/produk (list & filter)
// export interface ProdukRequestDto {
//   page?: number | null;
//   limit?: number | null;
//   search?: string;
//   idVendor?: number | null;
//   idProdukBrand?: number | null;
//   idProdukKategori?: number | null;
//   aktifOnly?: boolean;
// }
