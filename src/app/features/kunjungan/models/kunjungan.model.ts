import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';
import { KunjunganJual } from '../../kunjungan-jual/models/kunjungan-jual.model';
import { KunjunganTagih } from '../../kunjungan-tagih/models/kunjungan-tagih.model';

export interface Kunjungan {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  idUserdata: number | null;
  idPelanggan: number | null;
  idRutekunjung: number | null;
  idAolcust: number | null;
  kodeKunjungan: string;
  tanggalKunjungan: Date;
  idKunjunganjual: number | null;
  nilaiKunjunganJual: number | null;
  idKunjungantagih: number | null;
  nilaiKunjunganTagih: number | null;
  nilaiTagihTunai: number | null;
  nilaiTagihTransfer: number | null;
  nilaiTagihCekgiro: number | null;
  nilaiTotalTagih: number | null;
  statusJual: string;
  statusTagih: string;
  infoTidakJual: string;
  infoTidakTagih: string;
  stsjual: boolean;
  ststagih: boolean;
  latlong: string;
  kunjunganSelesai: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase;
  cabang?: Cabang;
  pelanggan?: Pelanggan;
  kunjunganjual?: KunjunganJual;
  kunjungantagih?: KunjunganTagih;
}
