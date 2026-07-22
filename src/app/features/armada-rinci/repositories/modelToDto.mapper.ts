import { ArmadaRinciDto } from '../models/armada-rinci.dto';
import { ArmadaRinci } from '../models/armada-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: ArmadaRinci): ArmadaRinciDto {
    return {
      id: model.id,
      id_armada: model.idArmada,
      nostnk_armada: model.nostnkArmada,
      nobpkb_armada: model.nobpkbArmada,
      tgl_pembelian: model.tglPembelian.toISOString(),
      service_terakhir: model.serviceTerakhir.toISOString(),
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
