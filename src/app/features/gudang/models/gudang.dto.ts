export interface GudangDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_aolware: number;
  nama_gudang: string;
  keterangan_gudang: string;
  location_id_aol: number;
  suspended_aol: boolean;
  default_warehouse_aol: boolean;
  created_at?: string;
  updated_at?: string;
}
