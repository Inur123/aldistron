import { PelangganPersonalDto } from '../models/pelanggan-personal.dto';
import { PelangganPersonal } from '../models/pelanggan-personal.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PelangganPersonalMapper {
  static toModel(dto: PelangganPersonalDto): PelangganPersonal {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PelangganPersonalDto[]): PelangganPersonal[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: PelangganPersonal): PelangganPersonalDto {
    return ModelToDtoMapper.toDto(model);
  }
}
