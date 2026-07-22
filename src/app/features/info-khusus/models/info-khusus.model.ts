import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface InfoKhusus {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  idUserdata: number | null;
  idPelanggan: number | null;
  namaInfokhusus: string;
  slug: string;
  keteranganInfokhusus: string;
  aktifInfokhusus: boolean;
  awalInfokhusus: Date;
  akhirInfokhusus: Date;
  gambarInfokhusus: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  pelanggan?: Pelanggan; // belongsTo
}
