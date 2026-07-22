export interface CabangDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_aolcab: number | null;
  nama_cabang: number | null;
  alamat_cabang: string;
  telp_cabang: string;
  handphone_cabang: string;
  pic_cabang: number | null;
  default_cabang: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}
