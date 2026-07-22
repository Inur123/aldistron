import { EvenkalenderDto } from '../models/evenkalender.dto';
import { Evenkalender } from '../models/evenkalender.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class EvenkalenderMapper {
  static toModel(dto: EvenkalenderDto): Evenkalender {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: EvenkalenderDto[]): Evenkalender[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Evenkalender): EvenkalenderDto {
    return ModelToDtoMapper.toDto(model);
  }
}
