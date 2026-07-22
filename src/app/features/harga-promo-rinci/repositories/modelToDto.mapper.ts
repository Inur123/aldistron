import { HargaPromoRinciDto } from '../models/harga-promo-rinci.dto';
import { HargaPromoRinci } from '../models/harga-promo-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: HargaPromoRinci): HargaPromoRinciDto {
    return model as unknown as HargaPromoRinciDto;
  }
}
