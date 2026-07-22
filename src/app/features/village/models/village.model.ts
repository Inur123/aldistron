import { District } from '../../district/models/district.model';

export interface Village {
  id: number;
  districtId: number;
  name: string;
  rajaongkir: string;
  kodepos: string;
  pilihVil: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  district?: District; // belongsTo
}
