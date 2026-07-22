export interface RuteKunjungDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  id_userdata: number;
  nama_rutekunjung: string;
  area_rutekunjung: string;
  hari_rutekunjung: string;
  interval_rutekunjung: number;
  nama_interval_rutekunjung: string;
  mulai_rutekunjung: string;
  minggu_ke: number;
  hari_pasaran: string;
  keterangan_rutekunjung: string;
  created_at?: string;
  updated_at?: string;
}
