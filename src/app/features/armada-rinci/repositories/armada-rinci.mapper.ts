import { ArmadaRinciDto } from '../models/armada-rinci.dto';
import { ArmadaRinci } from '../models/armada-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class ArmadaRinciMapper {
  static toModel(dto: ArmadaRinciDto): ArmadaRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: ArmadaRinciDto[]): ArmadaRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: ArmadaRinci): ArmadaRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
