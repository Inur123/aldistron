export interface GudangDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_aolware: number | null;
  nama_gudang: string;
  keterangan_gudang: string;
  location_id_aol: number | null;
  suspended_aol: boolean;
  default_warehouse_aol: boolean;
  created_at?: string;
  updated_at?: string;
}
