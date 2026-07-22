export interface ProdukBrandDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_vendor: number | null;
  nama_brand: string;
  keterangan_brand: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}
