import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface AolTax {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idAoltax: number | null;
  taxPurchaseId: number | null;
  taxSalesId: number | null;
  namaTax: string;
  nilaiTax: number | null;
  keteranganTax: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
}
