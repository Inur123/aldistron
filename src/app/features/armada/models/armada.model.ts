import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { ArmadaRinci } from '../../armada-rinci/models/armada-rinci.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { Pengiriman } from '../../pengiriman/models/pengiriman.model';


export interface Armada {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  kodeArmada: string;
  namaArmada: string;
  jenisArmada: string;
  kategoriArmada: string;
  tahunArmada: number;
  panjangArmada: number;
  lebarArmada: number;
  tinggiArmada: number;
  volumeArmada: number;
  tonaseArmada: number;
  nopolArmada: string;
  stnkExpired: Date;
  picArmada: number;
  aktif: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
  cabang?: Cabang;           // belongsTo
  armadarinci?: ArmadaRinci; // hasOne
  pengirimans?: Pengiriman[];// hasMany
}
