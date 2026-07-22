import { HistorystokRinciDto } from '../models/historystok-rinci.dto';
import { HistorystokRinci } from '../models/historystok-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HistorystokRinciMapper {
  static toModel(dto: HistorystokRinciDto): HistorystokRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HistorystokRinciDto[]): HistorystokRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HistorystokRinci): HistorystokRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
