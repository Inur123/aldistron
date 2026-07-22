export interface ProdukKompetitorDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  id_userdata: number | null;
  nama_administrator: string;
  email_administrator: string;
  jenis_produk: string;
  nama_produk: string;
  produsen_produk: string;
  alamat_produsen: string;
  konversi_produk: string;
  barcode_produk: string;
  gambar_produk: string;
  keterangan_produk: string;
  created_at?: string;
  updated_at?: string;
}
