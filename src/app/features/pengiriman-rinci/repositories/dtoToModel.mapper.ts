import { PengirimanRinciDto } from '../models/pengiriman-rinci.dto';
import { PengirimanRinci } from '../models/pengiriman-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: PengirimanRinciDto): PengirimanRinci {
    return dto as unknown as PengirimanRinci;
  }

  static toModelList(dtos: PengirimanRinciDto[]): PengirimanRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
