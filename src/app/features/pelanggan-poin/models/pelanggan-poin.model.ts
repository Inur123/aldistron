import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface Userdata {
  id: number;
  namaUser: string;
}

export interface PelangganPoin {
  id: number;
  idUserdata: number | null;
  idPelanggan: number | null;
  idJual: number | null;
  idTagih: number | null;
  idEvent: number | null;
  namaEvent: string;
  poinMasuk: number | null;
  poinKeluar: number | null;
  keterangan: string;
  poinSaldo: number | null;
  aktifEvent: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi Modular ──────────────────────────────────────────
  pelanggan?: Pelanggan;                 // belongsTo
  userdata?: Userdata;                   // belongsTo
}
