import { KlaimBiayaRinciDto } from '../models/klaim-biaya-rinci.dto';
import { KlaimBiayaRinci } from '../models/klaim-biaya-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: KlaimBiayaRinci): KlaimBiayaRinciDto {
    return model as unknown as KlaimBiayaRinciDto;
  }
}
