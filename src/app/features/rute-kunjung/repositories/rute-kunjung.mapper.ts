import { RuteKunjungDto } from '../models/rute-kunjung.dto';
import { RuteKunjung } from '../models/rute-kunjung.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class RuteKunjungMapper {
  static toModel(dto: RuteKunjungDto): RuteKunjung {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: RuteKunjungDto[]): RuteKunjung[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: RuteKunjung): RuteKunjungDto {
    return ModelToDtoMapper.toDto(model);
  }
}
