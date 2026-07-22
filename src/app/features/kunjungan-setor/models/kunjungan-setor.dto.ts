export interface KunjunganSetorDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  kode_kunjungan: string;
  id_userdata: number | null;
  v100000: number | null;
  v75000: number | null;
  v50000: number | null;
  v20000: number | null;
  v10000: number | null;
  v5000: number | null;
  v2000: number | null;
  v1000: number | null;
  v500: number | null;
  v200: number | null;
  v100: number | null;
  v50: number | null;
  total_setoran: number | null;
  selisih_setoran: number | null;
  status_setoran: string;
  kunci: boolean;
  created_at?: string;
  updated_at?: string;
}
