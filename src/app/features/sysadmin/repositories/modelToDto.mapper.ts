import { SysadminDto } from '../models/sysadmin.dto';
import { Sysadmin } from '../models/sysadmin.model';

export class ModelToDtoMapper {
  static toDto(model: Sysadmin): SysadminDto {
    return model as unknown as SysadminDto;
  }
}
