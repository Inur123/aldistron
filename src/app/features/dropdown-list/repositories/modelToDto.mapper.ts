import { DropdownListDto } from '../models/dropdown-list.dto';
import { DropdownList } from '../models/dropdown-list.model';

export class ModelToDtoMapper {
  static toDto(model: DropdownList): DropdownListDto {
    return model as unknown as DropdownListDto;
  }
}
