import { HargaMomenRinciDto } from '../models/harga-momen-rinci.dto';
import { HargaMomenRinci } from '../models/harga-momen-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: HargaMomenRinci): HargaMomenRinciDto {
    return model as unknown as HargaMomenRinciDto;
  }
}
