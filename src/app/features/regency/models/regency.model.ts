import { Province } from '../../province/models/province.model';
import { District } from '../../district/models/district.model';

export interface Regency {
  id: number;
  provinceId: number;
  name: string;
  rajaongkir: string;
  kodepos: string;
  pilihReg: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  province?: Province;    // belongsTo
  districts?: District[]; // hasMany
}
