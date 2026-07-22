import { UserdataTargetRinciDto } from '../models/userdata-target-rinci.dto';
import { UserdataTargetRinci } from '../models/userdata-target-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: UserdataTargetRinciDto): UserdataTargetRinci {
    return dto as unknown as UserdataTargetRinci;
  }

  static toModelList(dtos: UserdataTargetRinciDto[]): UserdataTargetRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
