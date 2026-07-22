import { Verifikasi } from '../../verifikasi/models/verifikasi.model';
import { Vendor } from '../../vendor/models/vendor.model';
import { Cabang } from '../../cabang/models/cabang.model';

export interface Userdata {
  id: number;
  namaUser: string;
}

export interface VerifikasiRinci {
  id: number;
  idVerifikasi: number | null;
  idCabang: number | null;
  kodeVerifikasi: string;
  kodeRegister: string;
  idUserdata: number | null;
  userRegister: string;
  emailRegister: string;
  divisi: string;
  kelasAkses: string;
  idVendor: number | null;
  namaVendor: string;
  keteranganKode: string;
  logAolbranchId: number | null;
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

