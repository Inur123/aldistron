import { HargaPaketDto } from '../models/harga-paket.dto';
import { HargaPaket } from '../models/harga-paket.model';

export class DtoToModelMapper {
  static toModel(dto: HargaPaketDto): HargaPaket {
    return dto as unknown as HargaPaket;
  }

  static toModelList(dtos: HargaPaketDto[]): HargaPaket[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
