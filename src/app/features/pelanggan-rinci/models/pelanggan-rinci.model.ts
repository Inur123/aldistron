import { Pelanggan } from '../../pelanggan/models/pelanggan.model';
import { PelangganPersonal } from '../../pelanggan-personal/models/pelanggan-personal.model';

export interface PelangganRinci {
  id: number;
  idPelanggan: number | null;
  namaPelanggan: string;
  kontakPelanggan: string;
  kontakEmail: string;
  kontakHandphone: string;
  kontakAlamat: string;
  alamatKirimPelanggan: string;
  kodeDesa: string;
  desaPelanggan: number | null;
  kecamatanPelanggan: number | null;
  kotaPelanggan: number | null;
  propinsiPelanggan: number | null;
  negaraPelanggan: number | null;
  latlongPelanggan: string;
  alamatTagihPelanggan: string;
  telpPelanggan: string;
  handphonePelanggan: string;
  emailPelanggan: string;
  nikPelanggan: string;
  npwpPelanggan: string;
  keteranganPelanggan: string;
  infokhususPelanggan: string;
  imagePelanggan: string;
  imageKtp: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // ─── Relasi / Asosiasi Modular ──────────────────────────────────────────
  pelanggan?: Pelanggan;                      // belongsTo
  pelangganpersonals?: PelangganPersonal[];   // hasMany
}
