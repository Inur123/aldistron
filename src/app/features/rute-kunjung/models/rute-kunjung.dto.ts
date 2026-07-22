export interface RuteKunjungDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  id_userdata: number | null;
  nama_rutekunjung: string;
  area_rutekunjung: string;
  hari_rutekunjung: string;
  interval_rutekunjung: number | null;
  nama_interval_rutekunjung: string;
  mulai_rutekunjung: string;
  minggu_ke: number | null;
  hari_pasaran: string;
  keterangan_rutekunjung: string;
  created_at?: string;
  updated_at?: string;
}
