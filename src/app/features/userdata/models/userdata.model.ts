import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { Useradmin } from '../../useradmin/models/useradmin.model';
import { UserdataRinci } from '../../userdata-rinci/models/userdata-rinci.model';
import { Token } from '../../token/models/token.model';
import { Kabarpasarchat } from '../../kabarpasarchat/models/kabarpasarchat.model';
import { Historystok } from '../../historystok/models/historystok.model';
import { PelangganRequest } from '../../pelanggan-request/models/pelanggan-request.model';

export interface Userdata {
  id: number;
  idAoldatabase: number;
  idCabang: number;
  idAoldb: number;
  idAolemp: number;
  sapaan: string;
  nama: string;
  username: string;
  email: string;
  password?: string;
  noHandphone: string;
  status: boolean;
  level: string;
  kelasAkses: string;
  alamat: string;
  upline: string;
  idVendor: number;
  namaVendor: string;
  aktifUserdata: boolean;
  biayaTanpaKunjungan: boolean;
  metodeJual: string;
  aolsalesId: number;
  logAolempId: number;
  logAolbranchId: number;
  aolUpdated: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase;            // belongsTo
  cabang?: Cabang;                      // belongsTo
  useradmin?: Useradmin;                // hasOne
  userdatarinci?: UserdataRinci;        // hasOne
  token?: Token;                        // hasOne
  kabarpasarchats?: Kabarpasarchat[];   // hasMany
  historystoks?: Historystok[];         // hasMany
  pelangganrequests?: PelangganRequest[]; // hasMany
}
