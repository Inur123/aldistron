export interface UserdataTargetDto {
  id: number;
  id_userdata: number;
  awal_target: string;
  akhir_target: string;
  nilai_target_jual: number;
  nilai_target_tagih: number;
  nilai_target_kirim: number;
  hasil_target_jual: number;
  hasil_target_tagih: number;
  hasil_target_kirim: number;
  created_at?: string;
  updated_at?: string;
}
