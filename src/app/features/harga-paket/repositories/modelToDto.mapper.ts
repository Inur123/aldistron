import { HargaPaketDto } from '../models/harga-paket.dto';
import { HargaPaket } from '../models/harga-paket.model';

export class ModelToDtoMapper {
  static toDto(model: HargaPaket): HargaPaketDto {
    return model as unknown as HargaPaketDto;
  }
}
