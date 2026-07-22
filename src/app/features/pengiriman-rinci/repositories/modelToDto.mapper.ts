import { PengirimanRinciDto } from '../models/pengiriman-rinci.dto';
import { PengirimanRinci } from '../models/pengiriman-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: PengirimanRinci): PengirimanRinciDto {
    return model as unknown as PengirimanRinciDto;
  }
}
