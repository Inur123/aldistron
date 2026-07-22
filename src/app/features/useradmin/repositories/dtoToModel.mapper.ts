import { UseradminDto } from '../models/useradmin.dto';
import { Useradmin } from '../models/useradmin.model';

export class DtoToModelMapper {
  static toModel(dto: UseradminDto): Useradmin {
    return dto as unknown as Useradmin;
  }

  static toModelList(dtos: UseradminDto[]): Useradmin[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
