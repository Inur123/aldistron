import { Regency } from '../../regency/models/regency.model';
import { Village } from '../../village/models/village.model';

export interface District {
  id: number;
  regencyId: number | null;
  name: string;
  rajaongkir: string;
  kodepos: string;
  pilihDis: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  regency?: Regency;   // belongsTo
  villages?: Village[]; // hasMany
}
