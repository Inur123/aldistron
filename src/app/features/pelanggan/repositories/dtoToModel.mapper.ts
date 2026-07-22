import { PelangganDto } from '../models/pelanggan.dto';
import { Pelanggan } from '../models/pelanggan.model';


export class DtoToModelMapper {
  static toModel(dto: PelangganDto): Pelanggan {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idCabang: dto.id_cabang,
      idAolcust: dto.id_aolcust,
      idAolsales: dto.id_aolsales,
      idJangkapiutang: dto.id_jangkapiutang,
      idPelanggankategori: dto.id_pelanggankategori,
      nomorPelanggan: dto.nomor_pelanggan,
      namaPelanggan: dto.nama_pelanggan,
      siklusKunjungan: dto.siklus_kunjungan,
      hariKunjungan: dto.hari_kunjungan,
      idHargajual: dto.id_hargajual,
      idHargadiskon: dto.id_hargadiskon,
      idHargapromo: dto.id_hargapromo,
      idHargapaket: dto.id_hargapaket,
      idHargamomen: dto.id_hargamomen,
      idPiutangplafon: dto.id_piutangplafon,
      idPiutangmomen: dto.id_piutangmomen,
      aktifPelanggan: dto.aktif_pelanggan,
      pricePelanggan: dto.price_pelanggan,
      logAolcatId: dto.log_aolcat_id,
      logAolbranchId: dto.log_aolbranch_id,
      logAolsalesId: dto.log_aolsales_id,
      logAoltermId: dto.log_aolterm_id,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined,
      deletedAt: dto.deleted_at ? new Date(dto.deleted_at) : null
    };
  }

  static toModelList(dtos: PelangganDto[]): Pelanggan[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
