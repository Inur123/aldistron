import { DropdownListDto } from '../models/dropdown-list.dto';
import { DropdownList } from '../models/dropdown-list.model';

export class DtoToModelMapper {
  static toModel(dto: DropdownListDto): DropdownList {
    return dto as unknown as DropdownList;
  }

  static toModelList(dtos: DropdownListDto[]): DropdownList[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
