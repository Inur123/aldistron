import { HargaMomenDto } from '../models/harga-momen.dto';
import { HargaMomen } from '../models/harga-momen.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HargaMomenMapper {
  static toModel(dto: HargaMomenDto): HargaMomen {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HargaMomenDto[]): HargaMomen[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HargaMomen): HargaMomenDto {
    return ModelToDtoMapper.toDto(model);
  }
}
