import { EvenkalenderRinciDto } from '../models/evenkalender-rinci.dto';
import { EvenkalenderRinci } from '../models/evenkalender-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class EvenkalenderRinciMapper {
  static toModel(dto: EvenkalenderRinciDto): EvenkalenderRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: EvenkalenderRinciDto[]): EvenkalenderRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: EvenkalenderRinci): EvenkalenderRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
