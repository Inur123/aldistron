import { HargaPromoRinciDto } from '../models/harga-promo-rinci.dto';
import { HargaPromoRinci } from '../models/harga-promo-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaPromoRinciMapper {
  static toModel(dto: HargaPromoRinciDto): HargaPromoRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaPromoRinciDto[]): HargaPromoRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaPromoRinci): HargaPromoRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
