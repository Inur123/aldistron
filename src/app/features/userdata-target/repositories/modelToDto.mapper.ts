import { UserdataTargetDto } from '../models/userdata-target.dto';
import { UserdataTarget } from '../models/userdata-target.model';

export class ModelToDtoMapper {
  static toDto(model: UserdataTarget): UserdataTargetDto {
    return model as unknown as UserdataTargetDto;
  }
}
