import { HargaPromoRinciDto } from '../models/harga-promo-rinci.dto';
import { HargaPromoRinci } from '../models/harga-promo-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: HargaPromoRinciDto): HargaPromoRinci {
    return dto as unknown as HargaPromoRinci;
  }

  static toModelList(dtos: HargaPromoRinciDto[]): HargaPromoRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
