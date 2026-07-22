export interface KlaimBiayaRinciDto {
  id: number;
  id_klaimbiaya: number;
  id_aolexpense_rinci: number;
  slug_biaya: string;
  nama_biaya: string;
  nilai_biaya: number;
  nomor_akun: string;
  keterangan_biaya: string;
  created_at?: string;
  updated_at?: string;
}
