import { KlaimBiaya } from '../../klaim-biaya/models/klaim-biaya.model';

export interface KlaimBiayaRinci {
  id: number;
  idKlaimbiaya: number | null;
  idAolexpenseRinci: number | null;
  slugBiaya: string;
  namaBiaya: string;
  nilaiBiaya: number | null;
  nomorAkun: string;
  keteranganBiaya: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  klaimbiaya?: KlaimBiaya; // belongsTo
}
