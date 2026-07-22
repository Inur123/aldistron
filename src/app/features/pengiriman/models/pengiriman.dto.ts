export interface PengirimanDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  id_armada: number | null;
  kode_pengiriman: string;
  tgl_pengiriman: string;
  area_pengiriman: string;
  nilai_pengiriman: number | null;
  dimensi_pengiriman: number | null;
  tonase_pengiriman: number | null;
  id_driver: number | null;
  nama_driver: string;
  array_pengirim: string[];
  created_at?: string;
  updated_at?: string;
}
