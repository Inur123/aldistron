import { ApiAolDto } from '../models/api-aol.dto';
import { ApiAol } from '../models/api-aol.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class ApiAolMapper {
  static toModel(dto: ApiAolDto): ApiAol {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: ApiAolDto[]): ApiAol[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: ApiAol): ApiAolDto {
    return ModelToDtoMapper.toDto(model);
  }
}
