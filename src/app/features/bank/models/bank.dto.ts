export interface BankDto {
  id: number;
  nama_param: string;
  string_param: string;
  alias_param: string;
  date_param: string;
  integer_param: number | null;
  float_param: number | null;
  keterangan_param: string;
  created_at?: string;
  updated_at?: string;
}
