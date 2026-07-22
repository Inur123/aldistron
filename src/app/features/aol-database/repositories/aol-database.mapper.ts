import { AolDatabaseDto } from '../models/aol-database.dto';
import { AolDatabase } from '../models/aol-database.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class AolDatabaseMapper {
  static toModel(dto: AolDatabaseDto): AolDatabase {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: AolDatabaseDto[]): AolDatabase[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: AolDatabase): AolDatabaseDto {
    return ModelToDtoMapper.toDto(model);
  }
}
