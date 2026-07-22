import { UserdataRinciDto } from '../models/userdata-rinci.dto';
import { UserdataRinci } from '../models/userdata-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: UserdataRinci): UserdataRinciDto {
    return model as unknown as UserdataRinciDto;
  }
}
