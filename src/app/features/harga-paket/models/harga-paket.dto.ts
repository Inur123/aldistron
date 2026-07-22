export interface HargaPaketDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  nama_hargapaket: string;
  keterangan_hargapaket: string;
  aktif_hargapaket: boolean;
  awal_hargapaket: string;
  akhir_hargapaket: string;
  tipe_alokasi_hargapaket: string;
  created_at?: string;
  updated_at?: string;
}
