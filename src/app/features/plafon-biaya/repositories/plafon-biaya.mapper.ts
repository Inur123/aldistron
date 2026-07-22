import { PlafonBiayaDto } from '../models/plafon-biaya.dto';
import { PlafonBiaya } from '../models/plafon-biaya.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PlafonBiayaMapper {
  static toModel(dto: PlafonBiayaDto): PlafonBiaya {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PlafonBiayaDto[]): PlafonBiaya[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: PlafonBiaya): PlafonBiayaDto {
    return ModelToDtoMapper.toDto(model);
  }
}
