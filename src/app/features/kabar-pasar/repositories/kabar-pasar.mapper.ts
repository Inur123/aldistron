import { KabarPasarDto } from '../models/kabar-pasar.dto';
import { KabarPasar } from '../models/kabar-pasar.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class KabarPasarMapper {
  static toModel(dto: KabarPasarDto): KabarPasar {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: KabarPasarDto[]): KabarPasar[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: KabarPasar): KabarPasarDto {
    return ModelToDtoMapper.toDto(model);
  }
}
