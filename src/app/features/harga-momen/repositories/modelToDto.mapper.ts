import { HargaMomenDto } from '../models/harga-momen.dto';
import { HargaMomen } from '../models/harga-momen.model';

export class ModelToDtoMapper {
  static toDto(model: HargaMomen): HargaMomenDto {
    return model as unknown as HargaMomenDto;
  }
}
