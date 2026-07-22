export interface KlaimBiayaRinciDto {
  id: number;
  id_klaimbiaya: number | null;
  id_aolexpense_rinci: number | null;
  slug_biaya: string;
  nama_biaya: string;
  nilai_biaya: number | null;
  nomor_akun: string;
  keterangan_biaya: string;
  created_at?: string;
  updated_at?: string;
}
