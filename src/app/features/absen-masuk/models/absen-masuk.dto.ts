export interface AbsenMasukDto {
  id: number;
  usrid: number;
  usrid_temp: number;
  status: string;
  tgl: string;
  waktu: string;
  district_id: number;
  geolokasi: string;
  area: string;
  pasar: string;
  foto: string;
  kodepos: string;
  region: string;
  nama: string;
  hari: string;
  keterangan: string;
  created_at?: string;
  updated_at?: string;
}
