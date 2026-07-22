import { SiteLogDto } from '../models/site-log.dto';
import { SiteLog } from '../models/site-log.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class SiteLogMapper {
  static toModel(dto: SiteLogDto): SiteLog {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: SiteLogDto[]): SiteLog[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: SiteLog): SiteLogDto {
    return ModelToDtoMapper.toDto(model);
  }
}
