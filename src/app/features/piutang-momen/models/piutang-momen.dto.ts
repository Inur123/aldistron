export interface PiutangMomenDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  nama_piutangmomen: string;
  keterangan_piutangmomen: string;
  aktif_piutangmomen: boolean;
  awal_piutangmomen: string;
  akhir_piutangmomen: string;
  tipe_alokasi_piutangmomen: string;
  poin_piutangmomen: number | null;
  created_at?: string;
  updated_at?: string;
}
