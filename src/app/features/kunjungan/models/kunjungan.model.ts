import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';
import { KunjunganJual } from '../../kunjungan-jual/models/kunjungan-jual.model';
import { KunjunganTagih } from '../../kunjungan-tagih/models/kunjungan-tagih.model';

export interface Kunjungan {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  idUserdata: number;
  idPelanggan: number;
  idRutekunjung: number;
  idAolcust: number;
  kodeKunjungan: string;
  tanggalKunjungan: Date;
  idKunjunganjual: number;
  nilaiKunjunganJual: number;
  idKunjungantagih: number;
  nilaiKunjunganTagih: number;
  nilaiTagihTunai: number;
  nilaiTagihTransfer: number;
  nilaiTagihCekgiro: number;
  nilaiTotalTagih: number;
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
