import { HargaPaketRinciDto } from '../models/harga-paket-rinci.dto';
import { HargaPaketRinci } from '../models/harga-paket-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: HargaPaketRinciDto): HargaPaketRinci {
    return dto as unknown as HargaPaketRinci;
  }

  static toModelList(dtos: HargaPaketRinciDto[]): HargaPaketRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
