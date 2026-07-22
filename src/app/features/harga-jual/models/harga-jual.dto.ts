export interface HargaJualDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  nama_hargajual: string;
  keterangan_hargajual: string;
  aktif_hargajual: boolean;
  awal_hargajual: string;
  akhir_hargajual: string;
  tipe_alokasi_hargajual: string;
  created_at?: string;
  updated_at?: string;
}
