export interface HargaPromoProdukDto {
  id: number;
  id_hargapromo: number | null;
  id_produk: number | null;
  nama_produk_hargapromo: string;
  include_max: boolean;
  created_at?: string;
  updated_at?: string;
}
