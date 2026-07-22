import { InfoKhususDto } from '../models/info-khusus.dto';
import { InfoKhusus } from '../models/info-khusus.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class InfoKhususMapper {
  static toModel(dto: InfoKhususDto): InfoKhusus {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: InfoKhususDto[]): InfoKhusus[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: InfoKhusus): InfoKhususDto {
    return ModelToDtoMapper.toDto(model);
  }
}
