import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { PelangganKategori } from '../../pelanggan-kategori/models/pelanggan-kategori.model';
import { PelangganRinci } from '../../pelanggan-rinci/models/pelanggan-rinci.model';

export interface Pelanggan {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  idAolcust: number;
  idAolsales: number;
  idJangkapiutang: number;
  idPelanggankategori: number;
  nomorPelanggan: string;
  namaPelanggan: string;
  siklusKunjungan: string;
  hariKunjungan: string;
  idHargajual: number;
  idHargadiskon: number;
  idHargapromo: number;
  idHargapaket: number;
  idHargamomen: number;
  idPiutangplafon: number;
  idPiutangmomen: number;
  aktifPelanggan: boolean;
  pricePelanggan: string;
  logAolcatId: number;
  logAolbranchId: number;
  logAolsalesId: number;
  logAoltermId: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // ─── Relasi / Asosiasi Modular RAPIDATA ────────────────────────────────
  aoldatabase?: AolDatabase;
  cabang?: Cabang;
  pelanggankategori?: PelangganKategori;
  pelangganrinci?: PelangganRinci;        // hasOne
}
