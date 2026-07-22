import { HargaMomenRinciDto } from '../models/harga-momen-rinci.dto';
import { HargaMomenRinci } from '../models/harga-momen-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: HargaMomenRinciDto): HargaMomenRinci {
    return dto as unknown as HargaMomenRinci;
  }

  static toModelList(dtos: HargaMomenRinciDto[]): HargaMomenRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
