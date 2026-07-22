import { HargaPaketRinciDto } from '../models/harga-paket-rinci.dto';
import { HargaPaketRinci } from '../models/harga-paket-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: HargaPaketRinci): HargaPaketRinciDto {
    return model as unknown as HargaPaketRinciDto;
  }
}
