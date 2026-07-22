import { KeycodeDto } from '../models/keycode.dto';
import { Keycode } from '../models/keycode.model';

export class ModelToDtoMapper {
  static toDto(model: Keycode): KeycodeDto {
    return model as unknown as KeycodeDto;
  }
}
