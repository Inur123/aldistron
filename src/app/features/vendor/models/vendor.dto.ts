export interface VendorDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  id_aolven: number;
  id_jangkapiutang: number;
  id_vendorkategori: number;
  nomor_vendor: string;
  nama_vendor: string;
  keterangan_vendor: string;
  log_aolcat_id: number;
  log_aolbranch_id: number;
  log_aolterm_id: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}
