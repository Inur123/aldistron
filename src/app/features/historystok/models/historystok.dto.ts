export interface HistorystokDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  id_userdata: number | null;
  id_pelanggan: number | null;
  kode_kunjungan: string;
  keterangan: string;
  created_at?: string;
  updated_at?: string;
}
