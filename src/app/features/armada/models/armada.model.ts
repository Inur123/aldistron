import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { ArmadaRinci } from '../../armada-rinci/models/armada-rinci.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { Pengiriman } from '../../pengiriman/models/pengiriman.model';


export interface Armada {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  kodeArmada: string;
  namaArmada: string;
  jenisArmada: string;
  kategoriArmada: string;
  tahunArmada: number | null;
  panjangArmada: number | null;
  lebarArmada: number | null;
  tinggiArmada: number | null;
  volumeArmada: number | null;
  tonaseArmada: number | null;
  nopolArmada: string;
  stnkExpired: Date;
  picArmada: number | null;
  aktif: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
  cabang?: Cabang;           // belongsTo
  armadarinci?: ArmadaRinci; // hasOne
  pengirimans?: Pengiriman[];// hasMany
}
