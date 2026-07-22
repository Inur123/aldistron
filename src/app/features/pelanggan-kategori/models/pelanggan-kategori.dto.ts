export interface PelangganKategoriDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_aolcustcat: number;
  nama_kategori: string;
  keterangan_kategori: string;
  parent_id: number;
  haschild: boolean;
  log_aolcat_id: number;
  connection_aol: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}
