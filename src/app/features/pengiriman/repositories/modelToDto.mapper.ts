import { PengirimanDto } from '../models/pengiriman.dto';
import { Pengiriman } from '../models/pengiriman.model';

export class ModelToDtoMapper {
  static toDto(model: Pengiriman): PengirimanDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      id_cabang: model.idCabang,
      id_armada: model.idArmada,
      kode_pengiriman: model.kodePengiriman,
      tgl_pengiriman: model.tglPengiriman.toISOString(),
      area_pengiriman: model.areaPengiriman,
      nilai_pengiriman: model.nilaiPengiriman,
      dimensi_pengiriman: model.dimensiPengiriman,
      tonase_pengiriman: model.tonasePengiriman,
      id_driver: model.idDriver,
      nama_driver: model.namaDriver,
      array_pengirim: model.arrayPengirim,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
