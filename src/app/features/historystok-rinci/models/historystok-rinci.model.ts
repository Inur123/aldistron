import { Historystok } from '../../historystok/models/historystok.model';

export interface HistorystokRinci {
  id: number;
  idHistorystok: number | null;
  idProduk: number | null;
  namaProduk: string;
  qtyProduk: number | null;
  idUnit: number | null;
  nomorProduk: string;
  namaUnit: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  historystok?: Historystok; // belongsTo
}
