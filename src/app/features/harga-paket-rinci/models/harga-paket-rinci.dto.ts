export interface HargaPaketRinciDto {
  id: number;
  id_hargapaket: number | null;
  id_produk_utama: number | null;
  qty_produk_utama: number | null;
  id_unit_produk_utama: number | null;
  id_produk_paket: number | null;
  qty_produk_paket: number | null;
  id_unit_produk_paket: number | null;
  kelipatan_paket: boolean;
  created_at?: string;
  updated_at?: string;
}
