export interface AbsenMasukDto {
  id: number;
  usrid: number | null;
  usrid_temp: number | null;
  status: string;
  tgl: string;
  waktu: string;
  district_id: number | null;
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
