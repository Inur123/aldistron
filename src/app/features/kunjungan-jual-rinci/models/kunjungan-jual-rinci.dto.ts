export interface KunjunganJualRinciDto {
  id: number;
  id_kunjunganjual: number;
  id_produk_kunjunganjual: number;
  nomor_produk_kunjunganjual: string;
  nama_produk_kunjunganjual: string;
  qty_produk_kunjunganjual: number;
  id_unit_kunjunganjual: number;
  nama_unit_kunjunganjual: string;
  harga_unit_kunjunganjual: number;
  diskon_unit_kunjunganjual: number;
  harga_produk_kunjunganjual: number;
  diskon_produk_kunjunganjual: number;
  totalharga_kunjunganjual: number;
  keterangan_transaksi: string;
  created_at?: string;
  updated_at?: string;
}
