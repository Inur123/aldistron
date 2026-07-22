import { PlafonBiayaDto } from '../models/plafon-biaya.dto';
import { PlafonBiaya } from '../models/plafon-biaya.model';

export class DtoToModelMapper {
  static toModel(dto: PlafonBiayaDto): PlafonBiaya {
    return dto as unknown as PlafonBiaya;
  }

  static toModelList(dtos: PlafonBiayaDto[]): PlafonBiaya[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
