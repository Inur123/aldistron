import { KlaimBiayaDto } from '../models/klaim-biaya.dto';
import { KlaimBiaya } from '../models/klaim-biaya.model';

export class ModelToDtoMapper {
  static toDto(model: KlaimBiaya): KlaimBiayaDto {
    return model as unknown as KlaimBiayaDto;
  }
}
