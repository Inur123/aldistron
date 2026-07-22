import { DropdownCustomDto } from '../models/dropdown-custom.dto';
import { DropdownCustom } from '../models/dropdown-custom.model';

export class DtoToModelMapper {
  static toModel(dto: DropdownCustomDto): DropdownCustom {
    return dto as unknown as DropdownCustom;
  }

  static toModelList(dtos: DropdownCustomDto[]): DropdownCustom[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
