export interface HargaPromoRinciDto {
  id: number;
  id_hargapromo_produk: number | null;
  id_produk_hargapromo: number | null;
  id_unit_hargapromo: number | null;
  nama_unit_hargapromo: string;
  min_qty_hargapromo: number | null;
  max_qty_hargapromo: number | null;
  id_produk_bonus: number | null;
  nama_produk_bonus: string;
  qty_bonus: number | null;
  id_unit_bonus: number | null;
  nilai_bonus: number | null;
  created_at?: string;
  updated_at?: string;
}
