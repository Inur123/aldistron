import { HargaMomenDto } from '../models/harga-momen.dto';
import { HargaMomen } from '../models/harga-momen.model';

export class DtoToModelMapper {
  static toModel(dto: HargaMomenDto): HargaMomen {
    return dto as unknown as HargaMomen;
  }

  static toModelList(dtos: HargaMomenDto[]): HargaMomen[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
