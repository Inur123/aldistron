import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface UploadFile {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  fileCategory: string;
  fileUsability: string;
  fileExtension: string;
  fileFieldname: string;
  fileOriginalname: string;
  fileFilename: string;
  filePath: string;
  fileSize: number | null;
  fileUsed: boolean;
  userEditor: number | null;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
}
