import { HargaPromoDto } from '../models/harga-promo.dto';
import { HargaPromo } from '../models/harga-promo.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaPromoMapper {
  static toModel(dto: HargaPromoDto): HargaPromo {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaPromoDto[]): HargaPromo[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaPromo): HargaPromoDto {
    return ModelToDtoMapper.toDto(model);
  }
}
