import { Cabang } from '../../cabang/models/cabang.model';
import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface Userdata {
  id: number;
  namaUser: string;
}

export interface PelangganRequest {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  namaAdministrator: string;
  emailAdministrator: string;
  kategoriPelanggan: string;
  namaPelanggan: string;
  kontakPelanggan: string;
  kontakEmail: string;
  kontakHandphone: string;
  kontakAlamat: string;
  alamatKirimPelanggan: string;
  kodeDesa: string;
  desaPelanggan: string;
  kecamatanPelanggan: string;
  kotaPelanggan: string;
  propinsiPelanggan: string;
  negaraPelanggan: string;
  latlongPelanggan: string;
  alamatTagihPelanggan: string;
  telpPelanggan: string;
  emailPelanggan: string;
  handphonePelanggan: string;
  nikPelanggan: string;
  npwpPelanggan: string;
  keteranganPelanggan: string;
  statusUsaha: string;
  luasTempat: number | null;
  statusTempat: string;
  imagePelanggan: string;
  imageKtp: string;
  idUserrequest: number | null;
  potensialPelanggan: string;
  idUservalidasi: number | null;
  validasiPelanggan: string;
  supplierPelanggan: string;
  produkPelanggan: string;
  feedbackLingkungan: string;
  feedbackSalesman: string;
  feedbackSupplier: string;
  plafonPelanggan: number | null;
  idUserrelease: number | null;
  releasePelanggan: boolean;
  idUsergenerate: number | null;
  statusGenerate: boolean;
  blacklist: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi Modular ──────────────────────────────────────────
  aoldatabase?: AolDatabase;             // belongsTo
  cabang?: Cabang;                       // belongsTo
  userdata?: Userdata;                   // belongsTo
}
