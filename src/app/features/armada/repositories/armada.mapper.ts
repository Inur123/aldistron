import { ArmadaDto } from '../models/armada.dto';
import { Armada } from '../models/armada.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class ArmadaMapper {
  static toModel(dto: ArmadaDto): Armada {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: ArmadaDto[]): Armada[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Armada): ArmadaDto {
    return ModelToDtoMapper.toDto(model);
  }
}
