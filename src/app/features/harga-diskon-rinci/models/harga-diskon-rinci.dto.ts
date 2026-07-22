export interface HargaDiskonRinciDto {
  id: number;
  id_hargadiskon_produk: number;
  id_produk_hargadiskon: number;
  id_unit_hargadiskon: number;
  nama_unit_hargadiskon: string;
  diskon_tipe: string;
  min_qty_hargadiskon: number;
  max_qty_hargadiskon: number;
  diskon_rupiah: number;
  diskon_persen: number;
  created_at?: string;
  updated_at?: string;
}
