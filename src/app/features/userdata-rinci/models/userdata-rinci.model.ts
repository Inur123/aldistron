import { Userdata } from '../../userdata/models/userdata.model';
import { Village } from '../../village/models/village.model';
import { District } from '../../district/models/district.model';
import { Regency } from '../../regency/models/regency.model';
import { Province } from '../../province/models/province.model';

export interface UserdataRinci {
  id: number;
  idUserdata: number;
  nikUser: string;
  npwpUser: string;
  kkUser: string;
  namaUser: string;
  tgllahirUser: string;
  alamatUser: string;
  villageId: number;
  districtId: number;
  regencyId: number;
  provinceId: number;
  latlongAlamatUser: string;
  imageKtp: string;
  imageNpwp: string;
  imageKk: string;
  jenisJaminan: string;
  nomorJaminan: string;
  imageJaminan: string;
  imageDoclegalSatu: string;
  imageDoclegalDua: string;
  lockLegal: boolean;
  emergencyRelasi: string;
  emergencyNama: string;
  emergencyHandphone: string;
  emergencyAlamat: string;
  jenjangPendidikan: string;
  jurusanPendidikan: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  userdata?: Userdata; // belongsTo
  village?: Village;   // belongsTo
  district?: District; // belongsTo
  regency?: Regency;   // belongsTo
  province?: Province; // belongsTo
}
