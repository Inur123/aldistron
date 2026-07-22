export interface HargaDiskonProdukDto {
  id: number;
  id_hargadiskon: number | null;
  id_produk: number | null;
  nama_produk_hargadiskon: string;
  created_at?: string;
  updated_at?: string;
}
