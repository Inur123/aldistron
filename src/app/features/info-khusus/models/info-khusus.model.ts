import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface InfoKhusus {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  idUserdata: number;
  idPelanggan: number;
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
