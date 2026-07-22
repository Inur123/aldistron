import { Verifikasi } from '../../verifikasi/models/verifikasi.model';
import { Vendor } from '../../vendor/models/vendor.model';
import { Cabang } from '../../cabang/models/cabang.model';

export interface Userdata {
  id: number;
  namaUser: string;
}

export interface VerifikasiRinci {
  id: number;
  idVerifikasi: number;
  idCabang: number;
  kodeVerifikasi: string;
  kodeRegister: string;
  idUserdata: number;
  userRegister: string;
  emailRegister: string;
  divisi: string;
  kelasAkses: string;
  idVendor: number;
  namaVendor: string;
  keteranganKode: string;
  logAolbranchId: number;
  idDevice: string;
  device: string;
  level: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  verifikasi?: Verifikasi;              // belongsTo
  cabang?: Cabang;                      // belongsTo
  userdata?: Userdata;                  // belongsTo
  vendor?: Vendor;                      // belongsTo
}

