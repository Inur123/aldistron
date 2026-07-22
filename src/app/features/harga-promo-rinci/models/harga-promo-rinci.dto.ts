export interface HargaPromoRinciDto {
  id: number;
  id_hargapromo_produk: number;
  id_produk_hargapromo: number;
  id_unit_hargapromo: number;
  nama_unit_hargapromo: string;
  min_qty_hargapromo: number;
  max_qty_hargapromo: number;
  id_produk_bonus: number;
  nama_produk_bonus: string;
  qty_bonus: number;
  id_unit_bonus: number;
  nilai_bonus: number;
  created_at?: string;
  updated_at?: string;
}
