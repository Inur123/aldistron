import { HargaDiskonRinciDto } from '../models/harga-diskon-rinci.dto';
import { HargaDiskonRinci } from '../models/harga-diskon-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: HargaDiskonRinci): HargaDiskonRinciDto {
    return model as unknown as HargaDiskonRinciDto;
  }
}
