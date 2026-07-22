import { SysadminDto } from '../models/sysadmin.dto';
import { Sysadmin } from '../models/sysadmin.model';

export class DtoToModelMapper {
  static toModel(dto: SysadminDto): Sysadmin {
    return dto as unknown as Sysadmin;
  }

  static toModelList(dtos: SysadminDto[]): Sysadmin[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
