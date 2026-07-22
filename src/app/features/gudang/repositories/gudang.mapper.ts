import { GudangDto } from '../models/gudang.dto';
import { Gudang } from '../models/gudang.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class GudangMapper {
  static toModel(dto: GudangDto): Gudang {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: GudangDto[]): Gudang[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Gudang): GudangDto {
    return ModelToDtoMapper.toDto(model);
  }
}
