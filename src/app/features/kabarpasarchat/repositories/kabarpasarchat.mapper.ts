import { KabarpasarchatDto } from '../models/kabarpasarchat.dto';
import { Kabarpasarchat } from '../models/kabarpasarchat.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KabarpasarchatMapper {
  static toModel(dto: KabarpasarchatDto): Kabarpasarchat {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KabarpasarchatDto[]): Kabarpasarchat[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Kabarpasarchat): KabarpasarchatDto {
    return ModelToDtoMapper.toDto(model);
  }
}
