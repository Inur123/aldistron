export interface JangkaPiutangDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_aolterm: string;
  nama_jangkapiutang: string;
  hari_jangkapiutang: number | null;
  suspended_aol: boolean;
  created_at?: string;
  updated_at?: string;
}
