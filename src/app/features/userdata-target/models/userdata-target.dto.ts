export interface UserdataTargetDto {
  id: number;
  id_userdata: number | null;
  awal_target: string;
  akhir_target: string;
  nilai_target_jual: number | null;
  nilai_target_tagih: number | null;
  nilai_target_kirim: number | null;
  hasil_target_jual: number | null;
  hasil_target_tagih: number | null;
  hasil_target_kirim: number | null;
  created_at?: string;
  updated_at?: string;
}
