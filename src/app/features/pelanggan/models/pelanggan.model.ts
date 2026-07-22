import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { PelangganKategori } from '../../pelanggan-kategori/models/pelanggan-kategori.model';
import { PelangganRinci } from '../../pelanggan-rinci/models/pelanggan-rinci.model';

export interface Pelanggan {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  idAolcust: number | null;
  idAolsales: number | null;
  idJangkapiutang: number | null;
  idPelanggankategori: number | null;
  nomorPelanggan: string;
  namaPelanggan: string;
  siklusKunjungan: string;
  hariKunjungan: string;
  idHargajual: number | null;
  idHargadiskon: number | null;
  idHargapromo: number | null;
  idHargapaket: number | null;
  idHargamomen: number | null;
  idPiutangplafon: number | null;
  idPiutangmomen: number | null;
  aktifPelanggan: boolean;
  pricePelanggan: string;
  logAolcatId: number | null;
  logAolbranchId: number | null;
  logAolsalesId: number | null;
  logAoltermId: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // ─── Relasi / Asosiasi Modular RAPIDATA ────────────────────────────────
  aoldatabase?: AolDatabase;
  cabang?: Cabang;
  pelanggankategori?: PelangganKategori;
  pelangganrinci?: PelangganRinci;        // hasOne
}
