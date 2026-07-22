import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { VerifikasiRinci } from '../../verifikasi-rinci/models/verifikasi-rinci.model';

export interface Verifikasi {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  perusahaan: string;
  namaAdministrator: string;
  emailAdministrator: string;
  emailAolconnector: string;
  serialNumber: string;
  kodeMaksimal: number;
  expiredDate: Date;
  serialAktif: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase;
  verifikasirincis?: VerifikasiRinci[];
}
