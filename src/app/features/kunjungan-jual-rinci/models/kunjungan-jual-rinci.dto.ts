export interface KunjunganJualRinciDto {
  id: number;
  id_kunjunganjual: number | null;
  id_produk_kunjunganjual: number | null;
  nomor_produk_kunjunganjual: string;
  nama_produk_kunjunganjual: string;
  qty_produk_kunjunganjual: number | null;
  id_unit_kunjunganjual: number | null;
  nama_unit_kunjunganjual: string;
  harga_unit_kunjunganjual: number | null;
  diskon_unit_kunjunganjual: number | null;
  harga_produk_kunjunganjual: number | null;
  diskon_produk_kunjunganjual: number | null;
  totalharga_kunjunganjual: number | null;
  keterangan_transaksi: string;
  created_at?: string;
  updated_at?: string;
}
