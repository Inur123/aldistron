import { UserdataDto } from '../models/userdata.dto';
import { Userdata } from '../models/userdata.model';

export class DtoToModelMapper {
  static toModel(dto: UserdataDto): Userdata {
    return dto as unknown as Userdata;
  }

  static toModelList(dtos: UserdataDto[]): Userdata[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
