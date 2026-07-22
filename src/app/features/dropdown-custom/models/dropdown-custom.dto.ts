export interface DropdownCustomDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  nama_administrator: string;
  email_administrator: string;
  kategori_param: string;
  jenis_param: string;
  nama_param: string;
  alias_param: string;
  slug_param: string;
  string_param: string;
  date_param: string;
  integer_param: number | null;
  float_param: number | null;
  double_param: number | null;
  text_param: string;
  value_param: string;
  keterangan_param: string;
  aktif_param: boolean;
  created_at?: string;
  updated_at?: string;
}
