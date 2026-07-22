import { UnitDto } from '../models/unit.dto';
import { Unit } from '../models/unit.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class UnitMapper {
  static toModel(dto: UnitDto): Unit {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: UnitDto[]): Unit[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Unit): UnitDto {
    return ModelToDtoMapper.toDto(model);
  }
}
