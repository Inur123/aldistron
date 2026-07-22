import { UserdataTargetRinciDto } from '../models/userdata-target-rinci.dto';
import { UserdataTargetRinci } from '../models/userdata-target-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: UserdataTargetRinci): UserdataTargetRinciDto {
    return model as unknown as UserdataTargetRinciDto;
  }
}
