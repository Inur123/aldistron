export interface ArmadaRinciDto {
  id: number;
  id_armada: number | null;
  nostnk_armada: string;
  nobpkb_armada: string;
  tgl_pembelian: string;
  service_terakhir: string;
  created_at?: string;
  updated_at?: string;
}
