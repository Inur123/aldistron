import { DropdownCustomDto } from '../models/dropdown-custom.dto';
import { DropdownCustom } from '../models/dropdown-custom.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class DropdownCustomMapper {
  static toModel(dto: DropdownCustomDto): DropdownCustom {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: DropdownCustomDto[]): DropdownCustom[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: DropdownCustom): DropdownCustomDto {
    return ModelToDtoMapper.toDto(model);
  }
}
