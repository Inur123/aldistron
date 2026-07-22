export interface PengaturanDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  perusahaan: string;
  parameter: string;
  nama_param: string;
  nama_slug: string;
  param_int: number | null;
  param_string: string;
  kat_string: string;
  param_array: string;
  keterangan: string;
  created_at?: string;
  updated_at?: string;
}
