export interface HargaJualRinciDto {
  id: number;
  id_hargajual: number;
  id_produk: number;
  id_unit: number;
  hargajual_het: number;
  hargajual_retail: number;
  hargajual_wo: number;
  hargajual_so: number;
  hargajual_custom: number;
  hargajual_spesial: number;
  created_at?: string;
  updated_at?: string;
}
