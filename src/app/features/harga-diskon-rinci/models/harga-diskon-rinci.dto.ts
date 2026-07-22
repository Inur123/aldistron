export interface HargaDiskonRinciDto {
  id: number;
  id_hargadiskon_produk: number | null;
  id_produk_hargadiskon: number | null;
  id_unit_hargadiskon: number | null;
  nama_unit_hargadiskon: string;
  diskon_tipe: string;
  min_qty_hargadiskon: number | null;
  max_qty_hargadiskon: number | null;
  diskon_rupiah: number | null;
  diskon_persen: number | null;
  created_at?: string;
  updated_at?: string;
}
