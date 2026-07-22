import { DropdownCustomDto } from '../models/dropdown-custom.dto';
import { DropdownCustom } from '../models/dropdown-custom.model';

export class ModelToDtoMapper {
  static toDto(model: DropdownCustom): DropdownCustomDto {
    return model as unknown as DropdownCustomDto;
  }
}
