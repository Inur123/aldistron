import { UserdataDto } from '../models/userdata.dto';
import { Userdata } from '../models/userdata.model';

export class ModelToDtoMapper {
  static toDto(model: Userdata): UserdataDto {
    return model as unknown as UserdataDto;
  }
}
