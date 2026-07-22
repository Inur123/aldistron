import { HariKerjaDto } from '../models/hari-kerja.dto';
import { HariKerja } from '../models/hari-kerja.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HariKerjaMapper {
  static toModel(dto: HariKerjaDto): HariKerja {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HariKerjaDto[]): HariKerja[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HariKerja): HariKerjaDto {
    return ModelToDtoMapper.toDto(model);
  }
}
