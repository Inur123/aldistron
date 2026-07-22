export interface KunjunganSetorDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  kode_kunjungan: string;
  id_userdata: number;
  v100000: number;
  v75000: number;
  v50000: number;
  v20000: number;
  v10000: number;
  v5000: number;
  v2000: number;
  v1000: number;
  v500: number;
  v200: number;
  v100: number;
  v50: number;
  total_setoran: number;
  selisih_setoran: number;
  status_setoran: string;
  kunci: boolean;
  created_at?: string;
  updated_at?: string;
}
