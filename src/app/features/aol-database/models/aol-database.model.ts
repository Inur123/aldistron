import { Verifikasi } from '../../verifikasi/models/verifikasi.model';
import { Pengaturan } from '../../pengaturan/models/pengaturan.model';

export interface AolDatabase {
  id: number;
  idAoldb: number | null;
  idAoltoken: number | null;
  namaAoldatabase: string;
  aktifAoldatabase: boolean;
  syncSatu: boolean;
  syncDua: boolean;
  accessibleUntilAoldatabase: Date;
  userAolconnector: string;
  emailAolconnector: string;
  handphoneAoldatabase: string;
  idAlserwa: string;
  syncEmployee: boolean;
  idEmployee: number | null;
  idSalesman: number | null;
  kodeSeriKoneksi: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // ─── Relasi / Asosiasi Modular ──────────────────────────────────────────
  verifikasi?: Verifikasi;       // hasOne  (1→1)
  pengaturan?: Pengaturan[];     // hasMany (1→N)
}
