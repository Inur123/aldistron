import { ProvinceDto } from '../models/province.dto';
import { Province } from '../models/province.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class ProvinceMapper {
  static toModel(dto: ProvinceDto): Province {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: ProvinceDto[]): Province[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Province): ProvinceDto {
    return ModelToDtoMapper.toDto(model);
  }
}
