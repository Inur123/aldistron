import { HargaPromoDto } from '../models/harga-promo.dto';
import { HargaPromo } from '../models/harga-promo.model';

export class ModelToDtoMapper {
  static toDto(model: HargaPromo): HargaPromoDto {
    return model as unknown as HargaPromoDto;
  }
}
