export interface KlaimBiayaDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  id_userdata: number | null;
  kode_klaim: string;
  kode_kunjungan: string;
  total_klaim: number | null;
  id_aolexpense: number | null;
  nomor_expense: string;
  minggu_klaim: number | null;
  bulan_klaim: number | null;
  tahun_klaim: number | null;
  selesai: boolean;
  created_at?: string;
  updated_at?: string;
}
