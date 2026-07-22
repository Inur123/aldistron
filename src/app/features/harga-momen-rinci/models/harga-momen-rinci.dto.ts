export interface HargaMomenRinciDto {
  id: number;
  id_hargamomen: number | null;
  tipe_momen: string;
  total_momen: number | null;
  potongan_rupiah: number | null;
  potongan_persen: number | null;
  id_produk_hargamomen: number | null;
  qty_produk_hargamomen: number | null;
  id_unit_produk_hargamomen: number | null;
  poin_hargamomen: number | null;
  created_at?: string;
  updated_at?: string;
}
