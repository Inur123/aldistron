import { UserdataRinciDto } from '../models/userdata-rinci.dto';
import { UserdataRinci } from '../models/userdata-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: UserdataRinciDto): UserdataRinci {
    return dto as unknown as UserdataRinci;
  }

  static toModelList(dtos: UserdataRinciDto[]): UserdataRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
