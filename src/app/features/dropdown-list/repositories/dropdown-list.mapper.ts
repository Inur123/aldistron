import { DropdownListDto } from '../models/dropdown-list.dto';
import { DropdownList } from '../models/dropdown-list.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class DropdownListMapper {
  static toModel(dto: DropdownListDto): DropdownList {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: DropdownListDto[]): DropdownList[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: DropdownList): DropdownListDto {
    return ModelToDtoMapper.toDto(model);
  }
}
