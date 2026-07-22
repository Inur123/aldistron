export interface HargaMomenDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  nama_hargamomen: string;
  keterangan_hargamomen: string;
  aktif_hargamomen: boolean;
  awal_hargamomen: string;
  akhir_hargamomen: string;
  tipe_alokasi_hargamomen: string;
  created_at?: string;
  updated_at?: string;
}
