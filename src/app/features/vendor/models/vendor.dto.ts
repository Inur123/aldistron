export interface VendorDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  id_aolven: number | null;
  id_jangkapiutang: number | null;
  id_vendorkategori: number | null;
  nomor_vendor: string;
  nama_vendor: string;
  keterangan_vendor: string;
  log_aolcat_id: number | null;
  log_aolbranch_id: number | null;
  log_aolterm_id: number | null;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}
