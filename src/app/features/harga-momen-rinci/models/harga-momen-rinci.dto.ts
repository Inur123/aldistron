export interface HargaMomenRinciDto {
  id: number;
  id_hargamomen: number;
  tipe_momen: string;
  total_momen: number;
  potongan_rupiah: number;
  potongan_persen: number;
  id_produk_hargamomen: number;
  qty_produk_hargamomen: number;
  id_unit_produk_hargamomen: number;
  poin_hargamomen: number;
  created_at?: string;
  updated_at?: string;
}
