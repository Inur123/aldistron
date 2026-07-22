export interface VendorKategoriDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_aolvencat: number | null;
  nama_kategori: string;
  keterangan_kategori: string;
  parent_id: number | null;
  haschild: boolean;
  log_aolcat_id: number | null;
  connection_aol: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}
