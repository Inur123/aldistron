import { CabangDto } from '../models/cabang.dto';
import { Cabang } from '../models/cabang.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class CabangMapper {
  static toModel(dto: CabangDto): Cabang {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: CabangDto[]): Cabang[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Cabang): CabangDto {
    return ModelToDtoMapper.toDto(model);
  }
}
