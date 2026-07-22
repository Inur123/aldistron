import { ArmadaRinciDto } from '../models/armada-rinci.dto';
import { ArmadaRinci } from '../models/armada-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: ArmadaRinciDto): ArmadaRinci {
    return {
      id: dto.id,
      idArmada: dto.id_armada,
      nostnkArmada: dto.nostnk_armada,
      nobpkbArmada: dto.nobpkb_armada,
      tglPembelian: new Date(dto.tgl_pembelian),
      serviceTerakhir: new Date(dto.service_terakhir),
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: ArmadaRinciDto[]): ArmadaRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
