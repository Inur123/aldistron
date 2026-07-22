import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface Gudang {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idAolware: number | null;
  namaGudang: string;
  keteranganGudang: string;
  locationIdAol: number | null;
  suspendedAol: boolean;
  defaultWarehouseAol: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
}
