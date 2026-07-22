export interface HargaPaketDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  nama_hargapaket: string;
  keterangan_hargapaket: string;
  aktif_hargapaket: boolean;
  awal_hargapaket: string;
  akhir_hargapaket: string;
  tipe_alokasi_hargapaket: string;
  created_at?: string;
  updated_at?: string;
}
