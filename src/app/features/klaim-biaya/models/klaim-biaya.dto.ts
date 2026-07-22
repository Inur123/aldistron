export interface KlaimBiayaDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  id_userdata: number;
  kode_klaim: string;
  kode_kunjungan: string;
  total_klaim: number;
  id_aolexpense: number;
  nomor_expense: string;
  minggu_klaim: number;
  bulan_klaim: number;
  tahun_klaim: number;
  selesai: boolean;
  created_at?: string;
  updated_at?: string;
}
