import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';
import { JangkaPiutang } from '../../jangka-piutang/models/jangka-piutang.model';
import { KunjunganJualRinci } from '../../kunjungan-jual-rinci/models/kunjungan-jual-rinci.model';

export interface KunjunganJual {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  namaCabang: string;
  kodeKunjungan: string;
  idUserdata: number | null;
  idPelanggan: number | null;
  nomorPelanggan: string;
  alamatPelanggan: string;
  idJangkapiutang: number | null;
  namaJangkapiutang: string;
  idAolso: number | null;
  hariKunjunganjual: string;
  tanggalKunjunganjual: Date;
  tanggalKirim: Date;
  nomorSalesorder: string;
  nilaiSalesorder: number | null;
  diskonFaktur: number | null;
  nilaiPoin: number | null;
  latlongKunjunganjual: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase;
  cabang?: Cabang;
  pelanggan?: Pelanggan;
  jangkapiutang?: JangkaPiutang;
  kunjunganjualrincis?: KunjunganJualRinci[]; // hasMany
}
