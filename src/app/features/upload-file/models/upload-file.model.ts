import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface UploadFile {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  fileCategory: string;
  fileUsability: string;
  fileExtension: string;
  fileFieldname: string;
  fileOriginalname: string;
  fileFilename: string;
  filePath: string;
  fileSize: number;
  fileUsed: boolean;
  userEditor: number;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
}
