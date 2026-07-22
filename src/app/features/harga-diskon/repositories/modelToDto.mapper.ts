import { HargaDiskonDto } from '../models/harga-diskon.dto';
import { HargaDiskon } from '../models/harga-diskon.model';

export class ModelToDtoMapper {
  static toDto(model: HargaDiskon): HargaDiskonDto {
    return model as unknown as HargaDiskonDto;
  }
}
