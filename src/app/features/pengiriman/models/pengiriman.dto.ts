export interface PengirimanDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  id_armada: number;
  kode_pengiriman: string;
  tgl_pengiriman: string;
  area_pengiriman: string;
  nilai_pengiriman: number;
  dimensi_pengiriman: number;
  tonase_pengiriman: number;
  id_driver: number;
  nama_driver: string;
  array_pengirim: string[];
  created_at?: string;
  updated_at?: string;
}
