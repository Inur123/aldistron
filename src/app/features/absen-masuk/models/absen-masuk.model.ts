import { District } from '../../district/models/district.model';

export interface AbsenMasuk {
  id: number;
  usrid: number;
  usridTemp: number;
  status: string;
  tgl: Date;
  waktu: string;
  districtId: number;
  geolokasi: string;
  area: string;
  pasar: string;
  foto: string;
  kodepos: string;
  region: string;
  nama: string;
  hari: string;
  keterangan: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  district?: District; // belongsTo
}
