import { Cabang } from '../../cabang/models/cabang.model';
import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface Userdata {
  id: number;
  namaUser: string;
}

export interface PelangganRequest {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
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
  luasTempat: number;
  statusTempat: string;
  imagePelanggan: string;
  imageKtp: string;
  idUserrequest: number;
  potensialPelanggan: string;
  idUservalidasi: number;
  validasiPelanggan: string;
  supplierPelanggan: string;
  produkPelanggan: string;
  feedbackLingkungan: string;
  feedbackSalesman: string;
  feedbackSupplier: string;
  plafonPelanggan: number;
  idUserrelease: number;
  releasePelanggan: boolean;
  idUsergenerate: number;
  statusGenerate: boolean;
  blacklist: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi Modular ──────────────────────────────────────────
  aoldatabase?: AolDatabase;             // belongsTo
  cabang?: Cabang;                       // belongsTo
  userdata?: Userdata;                   // belongsTo
}
