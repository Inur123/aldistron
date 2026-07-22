import { UserdataTargetDto } from '../models/userdata-target.dto';
import { UserdataTarget } from '../models/userdata-target.model';

export class DtoToModelMapper {
  static toModel(dto: UserdataTargetDto): UserdataTarget {
    return dto as unknown as UserdataTarget;
  }

  static toModelList(dtos: UserdataTargetDto[]): UserdataTarget[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
