import { KeycodeDto } from '../models/keycode.dto';
import { Keycode } from '../models/keycode.model';

export class DtoToModelMapper {
  static toModel(dto: KeycodeDto): Keycode {
    return dto as unknown as Keycode;
  }

  static toModelList(dtos: KeycodeDto[]): Keycode[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
