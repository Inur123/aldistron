import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface Userdata {
  id: number;
  namaUser: string;
}

export interface PelangganPoin {
  id: number;
  idUserdata: number;
  idPelanggan: number;
  idJual: number;
  idTagih: number;
  idEvent: number;
  namaEvent: string;
  poinMasuk: number;
  poinKeluar: number;
  keterangan: string;
  poinSaldo: number;
  aktifEvent: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi Modular ──────────────────────────────────────────
  pelanggan?: Pelanggan;                 // belongsTo
  userdata?: Userdata;                   // belongsTo
}
