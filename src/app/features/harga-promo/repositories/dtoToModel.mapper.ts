import { HargaPromoDto } from '../models/harga-promo.dto';
import { HargaPromo } from '../models/harga-promo.model';

export class DtoToModelMapper {
  static toModel(dto: HargaPromoDto): HargaPromo {
    return dto as unknown as HargaPromo;
  }

  static toModelList(dtos: HargaPromoDto[]): HargaPromo[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
