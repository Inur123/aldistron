import { HistorystokDto } from '../models/historystok.dto';
import { Historystok } from '../models/historystok.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HistorystokMapper {
  static toModel(dto: HistorystokDto): Historystok {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HistorystokDto[]): Historystok[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Historystok): HistorystokDto {
    return ModelToDtoMapper.toDto(model);
  }
}
