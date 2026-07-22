import { PengirimanDto } from '../models/pengiriman.dto';
import { Pengiriman } from '../models/pengiriman.model';

export class DtoToModelMapper {
  static toModel(dto: PengirimanDto): Pengiriman {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idCabang: dto.id_cabang,
      idArmada: dto.id_armada,
      kodePengiriman: dto.kode_pengiriman,
      tglPengiriman: new Date(dto.tgl_pengiriman),
      areaPengiriman: dto.area_pengiriman,
      nilaiPengiriman: dto.nilai_pengiriman,
      dimensiPengiriman: dto.dimensi_pengiriman,
      tonasePengiriman: dto.tonase_pengiriman,
      idDriver: dto.id_driver,
      namaDriver: dto.nama_driver,
      arrayPengirim: dto.array_pengirim,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: PengirimanDto[]): Pengiriman[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
