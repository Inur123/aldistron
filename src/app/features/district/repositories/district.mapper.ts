import { DistrictDto } from '../models/district.dto';
import { District } from '../models/district.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class DistrictMapper {
  static toModel(dto: DistrictDto): District {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: DistrictDto[]): District[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: District): DistrictDto {
    return ModelToDtoMapper.toDto(model);
  }
}
