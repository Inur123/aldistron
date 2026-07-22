import { PlafonBiayaDto } from '../models/plafon-biaya.dto';
import { PlafonBiaya } from '../models/plafon-biaya.model';

export class ModelToDtoMapper {
  static toDto(model: PlafonBiaya): PlafonBiayaDto {
    return model as unknown as PlafonBiayaDto;
  }
}
