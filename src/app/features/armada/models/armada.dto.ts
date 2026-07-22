export interface ArmadaDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  kode_armada: string;
  nama_armada: string;
  jenis_armada: string;
  kategori_armada: string;
  tahun_armada: number | null;
  panjang_armada: number | null;
  lebar_armada: number | null;
  tinggi_armada: number | null;
  volume_armada: number | null;
  tonase_armada: number | null;
  nopol_armada: string;
  stnk_expired: string;
  pic_armada: number | null;
  aktif: boolean;
  created_at?: string;
  updated_at?: string;
}
