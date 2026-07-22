export interface HargaJualRinciDto {
  id: number;
  id_hargajual: number | null;
  id_produk: number | null;
  id_unit: number | null;
  hargajual_het: number | null;
  hargajual_retail: number | null;
  hargajual_wo: number | null;
  hargajual_so: number | null;
  hargajual_custom: number | null;
  hargajual_spesial: number | null;
  created_at?: string;
  updated_at?: string;
}
