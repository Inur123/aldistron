import { KlaimBiaya } from '../../klaim-biaya/models/klaim-biaya.model';

export interface KlaimBiayaRinci {
  id: number;
  idKlaimbiaya: number;
  idAolexpenseRinci: number;
  slugBiaya: string;
  namaBiaya: string;
  nilaiBiaya: number;
  nomorAkun: string;
  keteranganBiaya: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  klaimbiaya?: KlaimBiaya; // belongsTo
}
