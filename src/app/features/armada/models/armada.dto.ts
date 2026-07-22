export interface ArmadaDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  kode_armada: string;
  nama_armada: string;
  jenis_armada: string;
  kategori_armada: string;
  tahun_armada: number;
  panjang_armada: number;
  lebar_armada: number;
  tinggi_armada: number;
  volume_armada: number;
  tonase_armada: number;
  nopol_armada: string;
  stnk_expired: string;
  pic_armada: number;
  aktif: boolean;
  created_at?: string;
  updated_at?: string;
}
