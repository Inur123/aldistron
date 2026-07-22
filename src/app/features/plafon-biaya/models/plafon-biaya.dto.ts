export interface PlafonBiayaDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  id_param: number | null;
  id_userdata: number | null;
  kategori_param: string;
  kode_param: string;
  slug_param: string;
  interval_param: number | null;
  minggu_param: boolean;
  bulan_param: boolean;
  tahun_param: boolean;
  nilai_param: number | null;
  qty_param: number | null;
  keterangan_param: string;
  created_at?: string;
  updated_at?: string;
}
