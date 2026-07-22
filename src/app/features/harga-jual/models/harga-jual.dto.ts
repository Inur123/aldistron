export interface HargaJualDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  nama_hargajual: string;
  keterangan_hargajual: string;
  aktif_hargajual: boolean;
  awal_hargajual: string;
  akhir_hargajual: string;
  tipe_alokasi_hargajual: string;
  created_at?: string;
  updated_at?: string;
}
