export interface HistorystokRinciDto {
  id: number;
  id_historystok: number | null;
  id_produk: number | null;
  nama_produk: string;
  qty_produk: number | null;
  id_unit: number | null;
  nomor_produk: string;
  nama_unit: string;
  created_at?: string;
  updated_at?: string;
}
