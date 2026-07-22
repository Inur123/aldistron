import { Regency } from '../../regency/models/regency.model';

export interface Province {
  id: number;
  name: string;
  rajaongkir: string;
  kodepos: string;
  pilihProv: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  regencies?: Regency[]; // hasMany
}
