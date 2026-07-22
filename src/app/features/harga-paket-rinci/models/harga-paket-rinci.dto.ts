export interface HargaPaketRinciDto {
  id: number;
  id_hargapaket: number;
  id_produk_utama: number;
  qty_produk_utama: number;
  id_unit_produk_utama: number;
  id_produk_paket: number;
  qty_produk_paket: number;
  id_unit_produk_paket: number;
  kelipatan_paket: boolean;
  created_at?: string;
  updated_at?: string;
}
